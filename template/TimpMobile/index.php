<?php
include $_SERVER['DOCUMENT_ROOT'] . 'template/TimpMobile/head.php';
include $_SERVER['DOCUMENT_ROOT'] . 'template/TimpMobile/header.php';
?>

<div class="o-main">
    <div class="o-main__wrap">
        <div class="o-main__top">
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
                    <input type="search" class="a-search-filed__input" placeholder="Название, проект, ответственный">
                </div>
            </div>
        </div>
        <div class="o-main__center">
            <div class="m-panel-card">
                <div class="m-panel-card__wrap">
                    <div class="a-title-block">
                        <div class="a-title-block__img"><img src="template/TimpMobile/img/no-img.png"
                                                             alt="Logo project"></div>
                        <p class="a-title-block__title">Новый проект № 1</p>
                    </div>
                    <span class="a-xs-font">Только что</span>
                    <p class="a-expiration">
                        <i class="a-icon --icon-update"></i>
                        <span class="a-expiration__date">12.05.22</span>
                    </p>
                    <div class="a-participants">
                        <div class="a-participants__author"><img src="" alt=""></div>
                        <i class="a-icon --icon-arrow-right-sm"></i>
                        <div class="a-participants__assigned"><img src="" alt=""></div>
                        <div class="a-participants__count">12</div>
                    </div>
                    <div class="a-notif-counter">12</div>
                    <div class="m-task-bar">
                        <div class="a-task-item">Новые - 15</div>
                        <div class="a-task-item">В работе - 3</div>
                        <div class="a-task-item">Выполнено - 4</div>
                    </div>
                    <div class="a-progress"><p>31%</p></div>
                </div>
            </div>
            <div class="m-add-btn-menu">
                <i class="m-add-btn-menu__icon"></i>
                <div class="m-add-btn-menu__wrap">
                    <ul>
                        <li>Пункт 1</li>
                        <li>Пункт 2</li>
                        <li>Пункт 3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="o-main__bottom">
            <div class="m-bottom-menu">
                <div class="a-bottom-menu-item">
                    <i class="a-bottom-menu-item__icon --icon-bubble-chart"></i>
                    <p class="a-bottom-menu-item__name">Чаты</p>
                </div>
                <div class="a-bottom-menu-item">
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
    let contextMenuBtn = document.getElementById('contextMenuBtn');
    contextMenuBtn.onclick = () => {
        document.querySelector('.m-context-menu').classList.toggle('--open');
    }
</script>

<?php
//include $_SERVER['DOCUMENT_ROOT'] . 'template/TimpMobile/parts/login.php';
?>

<?php
include $_SERVER['DOCUMENT_ROOT'] . 'template/TimpMobile/footer.php';
?>
