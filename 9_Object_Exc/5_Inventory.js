function createHeroRegister(heroData) {
    const heroes = heroData.map(data => {
        let [name, level, items] = data.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        return { name, level, items };
    });

    // Sort heroes by level in ascending order
    heroes.sort((a, b) => a.level - b.level);

    // Format and print each hero's data
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}
