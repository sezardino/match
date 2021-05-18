import Screen from '../abs/absScreen';

const scoreTemplate = () => `
<section class="shore">
    <h2 class="shore__title">Best players</h2>
    <ul class="shore__list">
        <li class="shore__item">
            <div class="user-shore">
                <div class="user-shore__wrapper">
                    <div class="user-shore__avatar-wrapper">
                        <img src="#" alt="#" />
                    </div>
                    <div class="user-shore__info">
                        <p class="user-shore__name">
                            Nicci Troiani
                        </p>
                        <p class="user-shore__mail">
                            nicci@gmail.com
                        </p>
                    </div>
                </div>
                <p class="user-shore__data">
                    Score:
                    <span class="user-shore__count">456</span>
                </p>
            </div>
        </li>
        <li class="shore__item">
            <div class="user-shore">
                <div class="user-shore__wrapper">
                    <div class="user-shore__avatar-wrapper">
                        <img src="#" alt="#" />
                    </div>
                    <div class="user-shore__info">
                        <p class="user-shore__name">
                            Nicci Troiani
                        </p>
                        <p class="user-shore__mail">
                            nicci@gmail.com
                        </p>
                    </div>
                </div>
                <p class="user-shore__data">
                    Score:
                    <span class="user-shore__count">456</span>
                </p>
            </div>
        </li>
        <li class="shore__item">
            <div class="user-shore">
                <div class="user-shore__wrapper">
                    <div class="user-shore__avatar-wrapper">
                        <img src="#" alt="#" />
                    </div>
                    <div class="user-shore__info">
                        <p class="user-shore__name">
                            Nicci Troiani
                        </p>
                        <p class="user-shore__mail">
                            nicci@gmail.com
                        </p>
                    </div>
                </div>
                <p class="user-shore__data">
                    Score:
                    <span class="user-shore__count">456</span>
                </p>
            </div>
        </li>
    </ul>
</section>`;

class ScoreScreen extends Screen {
    constructor(slug: string) {
        super(slug);
    }

    getTemplate() {
        return scoreTemplate();
    }
}

export default ScoreScreen;
