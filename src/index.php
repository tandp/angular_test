<?php
$host = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
$description = 'Проверьте, насколько вы разбираетесь в этой запутанной теме, и можно ли вас назвать сознательным членом гражданского общества';
$share_image = "$host/sn.jpeg";
if (isset($_GET['result']) && is_numeric($_GET['result'])) {
  $result = intval($_GET['result']);
  $share_image = "$host/assets/test/{$result}8.jpg";
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Тест: «Готовы ли вы к стихийному бедствию и сможете ли быть полезны пострадавшим?»</title>

  <meta name="description" content="Тест: «Что вы знаете о правах человека?» Проверьте свое гражданское самосознание">


  <!-- Configured Head Tags  -->
  <link rel="image_src" href="<?= $share_image ?>">
  <meta name="msapplication-TileColor" content="#00bcd4">
  <meta name="theme-color" content="#00bcd4">
  <meta property="og:url" content="<?= (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" ?>">
  <meta property="og:title" content="Тест: «Что вы знаете о правах человека?»">
  <meta property="og:description" content="<?= $description ?>">
  <meta property="og:image" content="<?= $share_image ?>">
  <meta name="title" content="Тест: «Что вы знаете о правах человека?»">
  <meta name="description" content="<?= $description ?>">
  <meta name="twitter:image" content="<?= $share_image ?>">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Тест: «Что вы знаете о правах человека?»">
  <meta name="twitter:description" content="<?= $description ?>">
  <meta itemprop="name" content="Тест: «Что вы знаете о правах человека?»"/>
  <meta itemprop="description" content="<?= $description ?>"/>
  <meta itemprop="image" content="<?= $share_image ?>"/>
  <!-- base url -->
  <base href="/">

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-7923853-1', 'auto');
    ga('send', 'pageview');

  </script>
  <script>(function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r=window.webpackJsonp;window.webpackJsonp=function(t,a,c){for(var i,u,f,l=0,s=[];l<t.length;l++)u=t[l],o[u]&&s.push(o[u][0]),o[u]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);for(r&&r(t,a,c);s.length;)s.shift()();if(c)for(l=0;l<c.length;l++)f=n(n.s=c[l]);return f};var t={},o={3:0};n.e=function(e){function r(){c.onerror=c.onload=null,clearTimeout(i);var n=o[e];0!==n&&(n&&n[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}if(0===o[e])return Promise.resolve();if(o[e])return o[e][2];var t=new Promise(function(n,r){o[e]=[n,r]});o[e][2]=t;var a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,n.nc&&c.setAttribute("nonce",n.nc),c.src=n.p+""+({0:"polyfills",1:"vendor",2:"main"}[e]||e)+"."+{0:"ca89b16a9f31afce651d",1:"def0a7ddfe005b1e893e",2:"4f9c310acba568f4aa53"}[e]+".chunk.js";var i=setTimeout(r,12e4);return c.onerror=c.onload=r,a.appendChild(c),t},n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n.oe=function(e){throw console.error(e),e}})([]);</script>
<script type="text/javascript" src="polyfills.ca89b16a9f31afce651d.bundle.js" defer></script><script type="text/javascript" src="vendor.def0a7ddfe005b1e893e.bundle.js" defer></script><script type="text/javascript" src="main.4f9c310acba568f4aa53.bundle.js" defer></script></head>

<body class="tp-page">

  <app>
    Загрузка...
  </app>



</body>
</html>
