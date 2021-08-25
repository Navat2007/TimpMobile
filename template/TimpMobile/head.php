<?php

// Включен режим разработки?
$test = false;
$version = rand();
$versionJs = ".js?" . $version; // Для сжатия JS файлов
$src = 'template/TimpMobile/';

$site_url = "https://mytimp.com"; // url-сайта

// OPEN GRAPH, JSON-LD
$open_graph = array(
    'type' => 'website', // website article
    'title' => "Проекты, задачи и общение в группе вместе с Timp", // Длинное название
    'site_name' => "Timp", // Короткое название
    'description' => "Timp это удобный задачник с возможностю общения с коллегами онлайн", // Краткое описание
    'url' => $site_url,
    'image' => $site_url . '/favicon/icon_ya.png', // путь до миниатюры
    'locale' => "ru_RU", // ru_RU
);

// ПОДКЛЮЧЕНИЕ СТИЛЕЙ
$styles_store = array(
    'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
    $src. 'css/styles.min.css?' . $version
);

//ПОДКЛЮЧЕНИЕ СКРИПТОВ
$scripts_store = array(
//    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//    $src. 'js/slider' . $versionJs,
//    $src. 'js/uhpv-full.min' . $versionJs,
//    $src. 'js/special' . $versionJs,
//    $src. 'js/script' . $versionJs,
);

?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!--OG -->
    <?php
    if (!empty($open_graph) && is_array($open_graph)) {
        foreach ($open_graph AS $property => $content) {
            echo '<meta property="og:' . $property . '" content="' . $content . '">';
        }
    }
    ?>

    <meta name="description" content="<?php echo $open_graph['description']; ?>">
    <meta name="copyright" content="<?= $site_url ?>">
    <meta name="robots" content="index, nofollow">
    <title><?php echo $open_graph['title'] . " - " . $open_graph['site_name']; ?></title>

    <!-- favicon -->
    <link rel="icon" type="image/png" href="<?= $site_url ?>/favicon/icon_192x192.png">
    <link rel="manifest" href="<?= $site_url ?>/manifest.json">
    <link rel="yandex-tableau-widget" href="<?= $site_url ?>/manifest.json"/>

    <!-- CSS -->
    <link rel="preconnect" href="https://fonts.gstatic.com">

    <?php
    if (!empty($styles_store) && is_array($styles_store)) {
        foreach ($styles_store AS $style) {
            echo '<link rel="stylesheet" href="' . $style . '">';
        }
    }
    ?>
</head>
<body>
