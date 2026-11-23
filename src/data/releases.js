// Releases on the NekoNews shelf, copied from the live "New on the Shelf" at nekonewsonline.com.
// Same fields as the nn_book post meta: title (post title), spine (nn_spine), vol (nn_vol),
// color (nn_color), format (nn_format), pub (nn_pub), date (nn_date), cover (featured image), href (permalink).
// Listed in the order the live shelf shows them, newest release day first.
const UP = 'https://nekonewsonline.com/wp-content/uploads/2026/11/';
const REL = 'https://nekonewsonline.com/releases/';

export const allReleasesUrl = REL;

const releases = [
    { title: 'Fool Night', spine: 'Fool Night Vol. 11', vol: '11', color: '#3a2042', format: 'Manga', pub: 'VIZ', date: '2026-12-15', cover: `${UP}Fool-Night-Vol.-11-Cover.jpg`, href: `${REL}fool-night/` },

    { title: 'Re:ZERO -Starting Life in Another World-, Vol. 30', spine: 'Re:ZERO Vol. 30', vol: '30', color: '#5a2a6e', format: 'Light novel', pub: 'Yen Press', date: '2026-12-08', cover: `${UP}9781975378561.webp`, href: `${REL}rezero-starting-life-in-another-world-vol-30/` },

    { title: 'Oshi No Ko Vol. 14', spine: 'Oshi No Ko. Vol 14', vol: '14', color: '#c8285a', format: 'Manga', pub: 'Yen Press', date: '2026-11-24', cover: `${UP}Oshi-no-Ko-Vol.-14.webp`, href: `${REL}oshi-no-ko-vol-14/` },
    { title: 'JoJo’s Bizarre Adventure Part 7 Vol. 10', spine: 'JoJo Part 7', vol: '10', color: '#5a2a6e', format: 'Manga', pub: 'VIZ Media', date: '2026-11-24', cover: `${UP}jojo-steel-ball-run-vol-10-cover.jpg`, href: `${REL}jojos-bizarre-adventure-part-7-vol-10/` },
    { title: 'My Hero Academia Box Set 2', spine: 'My Hero Academia', vol: '2', color: '#2453b8', format: 'Manga', pub: 'VIZ Media', date: '2026-11-24', cover: `${UP}my-hero-academia-box-set-2.jpg`, href: `${REL}my-hero-academia-box-set-2/` },
    { title: 'Sakamoto Days: Assassin’s Blues', spine: 'Sakamoto Days', vol: '1', color: '#c8285a', format: 'Light novel', pub: 'VIZ Media', date: '2026-11-24', cover: `${UP}sakamoto-days-assassins-blues-cover.jpg`, href: `${REL}sakamoto-days-assassins-blues/` },

    { title: 'The Faceless Mercenary Wants to Settle Down: Homestead at the Edge of the Galaxy Vol. 1', spine: 'The Faceless Mercenary Vol. 1', vol: '1', color: '#c8285a', format: 'Light novel', pub: 'Seven Seas Entertainment', date: '2026-11-19', cover: `${UP}faceless_mercenary_LN1_site.jpg`, href: `${REL}the-faceless-mercenary-wants-to-settle-down-homestead-at-the-edge-of-the-galaxy-vol-1/` },
    { title: 'Reluctant Space Commander: From Death Wish to Galactic Hero! Vol. 2', spine: 'Reluctant Space Commander Vol. 2', vol: '2', color: '#1f6fb5', format: 'Light novel', pub: 'Seven Seas Entertainment', date: '2026-11-19', cover: `${UP}reluctant_space_commander_LN2_site.jpg`, href: `${REL}reluctant-space-commander-from-death-wish-to-galactic-hero-vol-2/` },

    { title: 'Kingdom Vol. 13', spine: 'Kingdom Vol. 13', vol: '13', color: '#087454', format: 'Manga', pub: 'VIZ Media', date: '2026-11-17', cover: `${UP}1974761487.jpg`, href: `${REL}kingdom-vol-13/` },
    { title: 'Blue Lock Vol. 36', spine: 'Blue Lock, Vol. 36', vol: '36', color: '#087454', format: 'Manga', pub: 'Kodansha USA', date: '2026-11-17', cover: `${UP}bluelock36-768x1075.webp`, href: `${REL}blue-lock-vol-36/` },
    { title: 'KILLING ME / KILLING YOU Vol. 3', spine: 'Killing Me / Killing You Vol.3', vol: '3', color: '#3a2042', format: 'Manga', pub: 'Seven Seas Entertainment', date: '2026-11-17', cover: `${UP}killing_me_killing_M3_site.jpg`, href: `${REL}killing-me-killing-you-vol-3/` },
    { title: 'A Couple of Cuckoos, Volume 32', spine: 'Couple of Cuckoos Vol. 32', vol: '32', color: '#f0457a', format: 'Manga', pub: 'Kodansha USA', date: '2026-11-17', cover: `${UP}cuckoos32-768x1075.webp`, href: `${REL}a-couple-of-cuckoos-volume-32/` },
    { title: 'Vagabond Definitive Edition Vol. 7', spine: 'Vagabond', vol: '7', color: '#26222b', format: 'Manga', pub: 'VIZ Media', date: '2026-11-17', cover: `${UP}vagabond-definitive-edition-vol-7-cover-768x960.webp`, href: `${REL}vagabond-definitive-edition-vol-7/` },
    { title: 'The Way of the Househusband Vol. 16', spine: 'Househusband Vol.16', vol: '16', color: '#087454', format: 'Manga', pub: 'VIZ Media', date: '2026-11-17', cover: `${UP}way-of-the-househusband-vol-16-cover.jpg`, href: `${REL}the-way-of-the-househusband-vol-16/` },

    { title: 'The Empty Box and Zeroth Maria Collector’s Edition', spine: 'Empty Box and Zeroth Maria', vol: '', color: '#1f6fb5', format: 'Manga', pub: 'Yen Press', date: '2026-11-10', cover: `${UP}9798855423754.webp`, href: `${REL}the-empty-box-and-zeroth-maria-collectors-edition/` },
    { title: 'Albus Changes the World Vol. 1', spine: 'Albus Changes', vol: '1', color: '#1f6fb5', format: 'Manga', pub: 'VIZ Media', date: '2026-11-10', cover: `${UP}albus-changes-the-world-vol-1-cover.jpg`, href: `${REL}albus-changes-the-world-vol-1/` },
    { title: 'Seraph of the End Vol. 35', spine: 'Seraph of the End', vol: '35', color: '#3a2042', format: 'Manga', pub: 'VIZ Media', date: '2026-11-10', cover: `${UP}seraph-of-the-end-vol-35-cover.jpg`, href: `${REL}seraph-of-the-end-vol-35/` },
    { title: 'Akane-banashi Vol. 18', spine: 'Akane-banashi', vol: '18', color: '#2453b8', format: 'Manga', pub: 'VIZ Media', date: '2026-11-10', cover: `${UP}akane-banashi-vol-18-cover.jpg`, href: `${REL}akane-banashi-vol-18/` },
    { title: 'One Piece Vol. 113', spine: 'One Piece', vol: '113', color: '#c8285a', format: 'Manga', pub: 'VIZ Media', date: '2026-11-10', cover: `${UP}one-piece-vol-113-cover.jpg`, href: `${REL}one-piece-vol-113/` },
];

export default releases;
