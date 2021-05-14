const settings = () => `
<section class="settings">
    <h1 class="hidden">Settings</h1>
    <ul class="settings__list">
        <li class="settings__item">
            <h2 class="settings__title">Game Cards</h2>
            <select
                name="cards"
                id="cards"
                class="settings__select"
            >
                <option value="bear">Bear</option>
                <option value="dog">Dog</option>
                <option value="eagle">Eagle</option>
                <option value="nature">Nature</option>
            </select>
        </li>
        <li class="settings__item">
            <h2 class="settings__title">Placeholder Card</h2>
            <select
                name="placeholders"
                id="placeholders"
                class="settings__select"
            >
                <option value="canyon">Canyon</option>
                <option value="city">City</option>
                <option value="forest">Forest</option>
                <option value="mounts">Mounts</option>
                <option value="shine">Shine</option>
            </select>
        </li>
        <li class="settings__item">
            <h2 class="settings__title">Difficulty</h2>
            <select
                name="difficulty"
                id="difficulty"
                class="settings__select"
            >
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
                <option value="insane">Insane</option>
                <option value="god">God!</option>
            </select>
        </li>
    </ul>
</section>`;

export default settings;
