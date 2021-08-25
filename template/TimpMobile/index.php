<?php
include $_SERVER['DOCUMENT_ROOT'] . 'template/TimpMobile/head.php';
include $_SERVER['DOCUMENT_ROOT'] . 'template/TimpMobile/header.php';
?>

<div class="o-container">
    <div class="o-container__wrap">
        <div class="o-container__section o-section --hide" id="chatSection">
            <div class="o-section__top">
                <div class="m-top-panel">
                    <div class="m-top-title">
                        <p class="a-main-title">Чаты</p>
                        <div class="m-context-menu">
                            <i class="m-context-menu__icon" title="Дополнительно"></i>
                            <div class="m-context-menu__wrap">
                                <ul class="m-context-menu__list">
                                    <li class="m-context-menu__item">пункт 1</li>
                                    <li class="m-context-menu__item">пункт 2</li>
                                    <li class="m-context-menu__item">пункт 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="a-search-filed">
                        <input type="search" class="a-search-filed__input"
                               placeholder="Название, проект, ответственный">
                    </div>
                </div>
            </div>
            <div class="o-section__content">
                <div class="m-add-btn-menu">
                    <i class="m-add-btn-menu__icon"></i>
                    <div class="m-add-btn-menu__wrap">
                        <ul class="m-add-btn-menu__list">
                            <li class="m-add-btn-menu__item">Пункт 1</li>
                            <li class="m-add-btn-menu__item">Пункт 2</li>
                            <li class="m-add-btn-menu__item">Пункт 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="o-container__section o-section" id="projectSection">
            <div class="o-section__top">
                <div class="m-top-panel">
                    <div class="m-top-title">
                        <p class="a-main-title">Проекты</p>
                        <div class="m-context-menu">
                            <i class="m-context-menu__icon" title="Дополнительно" id="contextMenuBtn"></i>
                            <div class="m-context-menu__wrap">
                                <ul class="m-context-menu__list">
                                    <li class="m-context-menu__item">пункт 1</li>
                                    <li class="m-context-menu__item">пункт 2</li>
                                    <li class="m-context-menu__item">пункт 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="a-search-filed">
                        <input type="search" class="a-search-filed__input"
                               placeholder="Название, проект, ответственный">
                    </div>
                </div>
            </div>
            <div class="o-section__content">
                <div class="m-panel-card --open-set" id="projectCard">
                    <div class="m-panel-card__wrap">
                        <div class="m-panel-card__card-section">
                            <div class="a-title-block">
                                <div class="a-title-block__img"><img src="template/TimpMobile/img/no-img.png"
                                                                     alt="Logo project"></div>
                                <p class="a-title-block__title">Новый проект № 1</p>
                            </div>
                            <span class="a-xs-font">Только что</span>
                            <div class="a-participants">
                                <div class="a-participants__author"><img src="template/TimpMobile/img/person.png"
                                                                         alt="">
                                </div>
                                <i class="a-icon --icon-arrow-right-sm"></i>
                                <div class="a-participants__assigned"><img src="template/TimpMobile/img/person.png"
                                                                           alt="">
                                </div>
                                <div class="a-participants__count">
                                    <i class="a-icon --icon-person"></i>
                                    <span>12</span>
                                </div>
                            </div>
                            <p class="a-expiration">
                                <i class="a-icon --icon-update"></i>
                                <span class="a-expiration__date">12.05.22</span>
                            </p>
                            <div class="a-notif-counter">12</div>
                            <div class="m-task-bar">
                                <div class="a-task-item">Новые - 15</div>
                                <div class="a-task-item">В работе - 3</div>
                                <div class="a-task-item">Выполнено - 4</div>
                            </div>
                            <div class="a-progress">
                                <div class="a-progress__percentage" style="width: 50%"></div>
                                <p>50%</p>
                            </div>
                        </div>
                        <div class="m-panel-card__edit-section">
                            <div class="a-edit-panel-btn">
                                <i class="a-icon --icon-more-horiz"></i>
                                <p>Ещё</p>
                            </div>
                            <div class="a-edit-panel-btn">
                                <i class="a-icon --icon-person-add"></i>
                                <p>Добавить</p>
                            </div>
                            <div class="a-edit-panel-btn">
                                <i class="a-icon --icon-trash"></i>
                                <p>Удалить</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-panel-card">
                    <div class="m-panel-card__wrap">
                        <div class="m-panel-card__card-section">
                            <div class="a-title-block">
                                <div class="a-title-block__img"><img src="template/TimpMobile/img/no-img.png"
                                                                     alt="Logo project"></div>
                                <p class="a-title-block__title">Новый проект № 1</p>
                            </div>
                            <span class="a-xs-font">Только что</span>
                            <div class="a-participants">
                                <div class="a-participants__author"><img src="template/TimpMobile/img/person.png"
                                                                         alt="">
                                </div>
                                <i class="a-icon --icon-arrow-right-sm"></i>
                                <div class="a-participants__assigned"><img src="template/TimpMobile/img/person.png"
                                                                           alt="">
                                </div>
                                <!--<div class="a-participants__count">
                                    <i class="a-icon --icon-person"></i>
                                    <span>12</span>
                                </div>-->
                            </div>
                            <p class="a-expiration">
                                <i class="a-icon --icon-update"></i>
                                <span class="a-expiration__date">12.05.22</span>
                            </p>
                            <div class="a-notif-counter">12</div>
                            <div class="m-task-bar">
                                <div class="a-task-item">Новые - 15</div>
                                <div class="a-task-item">В работе - 3</div>
                                <div class="a-task-item">Выполнено - 4</div>
                            </div>
                            <div class="a-progress">
                                <div class="a-progress__percentage" style="width: 50%"></div>
                                <p>50%</p>
                            </div>
                        </div>
                        <div class="m-panel-card__edit-section">
                            <div class="a-edit-panel-btn">
                                <i class="a-icon --icon-more-horiz"></i>
                                <p>Ещё</p>
                            </div>
                            <div class="a-edit-panel-btn">
                                <i class="a-icon --icon-person-add"></i>
                                <p>Добавить</p>
                            </div>
                            <div class="a-edit-panel-btn">
                                <i class="a-icon --icon-trash"></i>
                                <p>Удалить</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-add-btn-menu">
                    <i class="m-add-btn-menu__icon" id="sideBarBtn"></i>
                    <div class="m-add-btn-menu__wrap">
                        <ul class="m-add-btn-menu__list">
                            <li class="m-add-btn-menu__item">Пункт 1</li>
                            <li class="m-add-btn-menu__item">Пункт 2</li>
                            <li class="m-add-btn-menu__item">Пункт 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="o-container__section o-section --hide">
            <div class="o-section__top">
                <div class="m-top-panel">
                    <div class="m-top-title">
                        <p class="a-main-title">Задачи</p>
                        <div class="m-context-menu">
                            <i class="m-context-menu__icon" title="Дополнительно"></i>
                            <div class="m-context-menu__wrap">
                                <ul class="m-context-menu__list">
                                    <li class="m-context-menu__item">пункт 1</li>
                                    <li class="m-context-menu__item">пункт 2</li>
                                    <li class="m-context-menu__item">пункт 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="a-search-filed">
                        <input type="search" class="a-search-filed__input"
                               placeholder="Название, проект, ответственный">
                    </div>
                </div>
            </div>
            <div class="o-section__content">
                <div class="m-add-btn-menu">
                    <i class="m-add-btn-menu__icon"></i>
                    <div class="m-add-btn-menu__wrap">
                        <ul class="m-add-btn-menu__list">
                            <li class="m-add-btn-menu__item">Пункт 1</li>
                            <li class="m-add-btn-menu__item">Пункт 2</li>
                            <li class="m-add-btn-menu__item">Пункт 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="o-container__section o-section --hide">
            <div class="o-section__top">
                <div class="m-top-panel">
                    <div class="m-top-title">
                        <p class="a-main-title">Настройки</p>
                        <div class="m-context-menu">
                            <i class="m-context-menu__icon" title="Дополнительно"></i>
                            <div class="m-context-menu__wrap">
                                <ul class="m-context-menu__list">
                                    <li class="m-context-menu__item">пункт 1</li>
                                    <li class="m-context-menu__item">пункт 2</li>
                                    <li class="m-context-menu__item">пункт 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="a-search-filed">
                        <input type="search" class="a-search-filed__input"
                               placeholder="Название, проект, ответственный">
                    </div>
                </div>
            </div>
            <div class="o-section__content">
                <div class="m-add-btn-menu">
                    <i class="m-add-btn-menu__icon"></i>
                    <div class="m-add-btn-menu__wrap">
                        <ul class="m-add-btn-menu__list">
                            <li class="m-add-btn-menu__item">Пункт 1</li>
                            <li class="m-add-btn-menu__item">Пункт 2</li>
                            <li class="m-add-btn-menu__item">Пункт 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="o-container__bottom">
            <div class="m-bottom-menu">
                <div class="a-bottom-menu-item" id="chatSectionBtn">
                    <i class="a-bottom-menu-item__icon --icon-bubble-chart"></i>
                    <p class="a-bottom-menu-item__name">Чаты</p>
                </div>
                <div class="a-bottom-menu-item --active" id="projectSectionBtn">
                    <i class="a-bottom-menu-item__icon --icon-dashboard"></i>
                    <p class="a-bottom-menu-item__name">Проекты</p>
                </div>
                <div class="a-bottom-menu-item">
                    <i class="a-bottom-menu-item__icon --icon-check-circle"></i>
                    <p class="a-bottom-menu-item__name">Задачи</p>
                </div>
                <div class="a-bottom-menu-item">
                    <i class="a-bottom-menu-item__icon --icon-more-horiz"></i>
                    <p class="a-bottom-menu-item__name">Еще</p>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    let chatSectionBtn = document.getElementById('chatSectionBtn');
    let chatSection = document.getElementById('chatSection');

    chatSectionBtn.onclick = () => {
        chatSectionBtn.classList.add('--active');
        chatSection.classList.remove('--hide');
    }

    let contextMenuBtn = document.getElementById('contextMenuBtn');
    contextMenuBtn.onclick = () => {
        contextMenuBtn.parentElement.classList.toggle('--open');
    }

    let sideBarBtn = document.getElementById('sideBarBtn');
    sideBarBtn.onclick = () => {
        sideBarBtn.parentElement.classList.toggle('--open');
    }

    let projectCard = document.getElementById('projectCard');
    projectCard.onclick = () => {
        projectCard.classList.toggle('--open-set');
    }
</script>

<?php
//include $_SERVER['DOCUMENT_ROOT'] . 'template/TimpMobile/parts/login.php';
?>

<?php
include $_SERVER['DOCUMENT_ROOT'] . 'template/TimpMobile/footer.php';
?>
