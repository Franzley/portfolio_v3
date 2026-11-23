// NekoNews "New on the Shelf", rendered in JS.
// Builds the same markup as the [nn_shelf] shortcode in nekonews/functions.php
// and uses the theme's click behaviour from its wp_footer script.
import releases, { allReleasesUrl } from '../data/releases.js';

const fmt = (date, opts) => date.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });

// "2026-11-23" -> { key, weekday: "Mon", monthDay: "Nov 23", short: "Mon 23" }
const dayInfo = (iso) => {
    const d = new Date(`${iso}T12:00:00Z`);
    return {
        weekday: fmt(d, { weekday: 'short' }),
        monthDay: fmt(d, { month: 'short', day: 'numeric' }),
        short: `${fmt(d, { weekday: 'short' })} ${fmt(d, { day: 'numeric' })}`,
    };
};

const localIso = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
};

const renderBook = (book, day, open) => {
    const btn = el('button', 'nn-book');
    btn.type = 'button';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', book.title);
    btn.style.setProperty('--c', book.color || '#f0457a');
    if (book.href) btn.dataset.href = book.href;

    const spine = el('span', 'nn-spine');
    spine.append(el('b', '', book.spine || book.title));
    if (book.vol !== undefined && book.vol !== '') spine.append(el('i', '', book.vol));
    spine.append(el('small', '', day.short));

    const cover = el('span', 'nn-cover');
    const imgWrap = el('span', 'nn-cover__img');
    const img = el('img');
    img.src = book.cover || '/neko/nekonews-placeholder.jpg';
    img.alt = '';
    img.loading = 'lazy';
    imgWrap.append(img);

    const info = el('span', 'nn-cover__info');
    info.append(
        el('strong', '', book.title),
        el('small', '', [book.format, book.pub, day.monthDay].filter(Boolean).join(' · ')),
        el('span', 'nn-cover__go', 'See details'),
    );
    cover.append(imgWrap, info);
    btn.append(spine, cover);
    return btn;
};

const renderShelf = (mount) => {
    // Group by release day in the order of the data file, at most 7 days (same as the shortcode).
    const days = new Map();
    releases.forEach((b) => {
        if (!days.has(b.date)) days.set(b.date, []);
        days.get(b.date).push(b);
    });
    const keys = [...days.keys()].slice(0, 7);
    if (!keys.length) {
        mount.replaceChildren(el('p', 'nn-shelf-none', 'No volumes on the shelf yet.'));
        return;
    }

    const today = localIso();
    const openDay = days.has(today) ? today : keys[0];

    const scroll = el('div', 'nn-shelf-scroll');
    const wrap = el('div', 'nn-shelf-days');
    keys.forEach((key) => {
        const day = dayInfo(key);
        const isToday = key === today;
        const sday = el('div', `nn-sday${isToday ? ' nn-sday--today' : ''}`);

        const lbl = el('div', 'nn-sday__lbl');
        lbl.append(el('small', '', day.weekday), day.monthDay);
        if (isToday) lbl.append(el('em', '', 'Today'));

        const row = el('div', 'nn-sday__row');
        days.get(key).forEach((book, i) => row.append(renderBook(book, day, key === openDay && i === 0)));

        const plank = el('div', 'nn-sday__plank');
        plank.setAttribute('aria-hidden', 'true');

        sday.append(lbl, row, plank);
        wrap.append(sday);
    });
    scroll.append(wrap);
    mount.replaceChildren(scroll);
};

const nekoShelf = () => {
    const mount = document.querySelector('[data-neko-shelf]');
    if (!mount) return;
    renderShelf(mount);

    const more = document.querySelector('.nn-shelf .nn-more a');
    if (more) more.href = allReleasesUrl;

    // Theme behaviour: a click opens that book and closes the others;
    // a click on the open book follows its link if it has one.
    mount.addEventListener('click', (e) => {
        const b = e.target.closest('.nn-book');
        if (!b) return;
        if (b.getAttribute('aria-expanded') === 'true' && b.dataset.href) {
            // The theme navigates in place; here the release opens on NekoNewsOnline in a new tab.
            window.open(b.dataset.href, '_blank', 'noopener');
            return;
        }
        mount.querySelectorAll('.nn-book').forEach((x) => x.setAttribute('aria-expanded', x === b ? 'true' : 'false'));
    });
};

export default nekoShelf;
