//
//     Name: app.js
//     Description: HTML5 Base Generator
//     Created: 15/06/2021
//     Modified: N/A
//

function submit() {
    // General
    var inp_name = document.querySelector('#name').value;
    var inp_desc = document.querySelector('#desc').value;
    var inp_lang = document.querySelector('#lang').value;

    // Theme
    var inp_theme = document.querySelector('#theme').value;
    var inp_theme2 = document.querySelector('#theme2').value;
    var inp_icon = document.querySelector('#icon').value;
    var inp_icon32x = document.querySelector('#icon32x').value;
    var inp_manifest = document.querySelector('#manifest').value;

    // Seo
    var inp_keywords = document.querySelector('#keywords').value;
    var inp_author = document.querySelector('#author').value;
    var inp_copyright = document.querySelector('#copyright').value;
    var inp_canonical = document.querySelector('#canonical').value;

    // External
    var inp_twitCreator = document.querySelector('#twitCreator').value;
    var inp_twitSite = document.querySelector('#twitSite').value;
    var inp_ogUrl = document.querySelector('#ogUrl').value;
    var inp_ogImg = document.querySelector('#ogImg').value;

    // Dependencies
    var inp_bs5 = document.querySelector('#bs5').checked;
    var inp_vue = document.querySelector('#vue').checked;
    var inp_react = document.querySelector('#react').checked;
    var inp_ang = document.querySelector('#ang').checked;
    var inp_fa = document.querySelector('#fa').checked;
    var inp_tw = document.querySelector('#tw').checked;
    var inp_jq = document.querySelector('#jq').checked;
    

    if (inp_name) {
        // Setting default values
        inp_lang ? inp_lang : 'en';

        if (inp_theme2) { inp_theme = inp_theme2 }
        // console.log('2', inp_theme2)
        // console.log('1', inp_theme)
        // inp_theme ? inp_theme2 : inp_theme;
        // console.log('1', inp_theme)


        let skipper = '';
        let resultingHTML = `<!-- Build using Marble Root by JacobEM.com -->
<!DOCTYPE html>
<html lang='${inp_lang}'>
<head>
    <meta charset='UTF-8'/>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
    <!-- Metadata -->
${inp_desc ? '    <meta name="description" content="' + inp_desc + '/>' : skipper }
${inp_keywords ? '    <meta name="keywords" content="' + inp_keywords + '/>' : skipper }
${inp_author ? '    <meta name="author" content="' + inp_author + '/>' : skipper }
${inp_copyright ? '    <meta name="copyright" content="' + inp_copyright + '/>' : skipper }
    <!-- External -->
${inp_twitCreator ? '    <meta name="twitter:card" content="summary"/>' : skipper }
${inp_twitCreator ? '    <meta name="twitter:creator" content="' + inp_twitCreator + '/>' : skipper }
${inp_twitSite ? '    <meta name="twitter:site" content="' + inp_twitSite + '/>' : skipper }
${inp_name ? '    <meta property="og:title" content="' + inp_name + '/>' : skipper }
    <meta property="og:type" content="website"/>
${inp_ogUrl ? '    <meta property="og:url" content="' + inp_ogUrl + '/>' : skipper }
${inp_ogImg ? '    <meta property="og:image" content="' + inp_ogImg + '/>' : skipper }
${inp_desc ? '    <meta property="og:description" content="' + inp_desc + '/>' : skipper }
    <!-- Theme -->
${inp_theme ? '    <meta name="theme-color" content="' + inp_theme + '/>' : skipper }
${inp_name ? '    <title>' + inp_name + '</title>' : skipper }
${inp_canonical ? '    <link rel="canonical" href="' + inp_canonical + '/>' : skipper }
${inp_icon ? '    <link rel="shortcut icon" href="' + inp_icon + ' type="image/x-icon"/>' : skipper }
${inp_icon32x ? '    <link rel="icon" href="' + inp_icon32x + ' type="image/png"/>' : skipper }
${inp_icon ? '    <link rel="apple-touch-icon" href="' + inp_icon + ' type="image/x-icon"/>' : skipper }
${inp_manifest ? '    <link rel="manifest" href="' + inp_manifest + '/>' : skipper }
    <!-- Dependencies -->
    ${inp_bs5 ? '<!-- Bootstrap 5 -->\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous" defer></script>' : skipper }
    ${inp_vue ? '<!-- Vue.js -->\n    <script src="https://cdn.jsdelivr.net/npm/vue@2" defer></script>' : skipper }
    ${inp_react ? '<!-- React -->\n    <script src="https://unpkg.com/react@17/umd/react.development.js" defer></script>\n    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" defer></script>' : skipper }
    ${inp_ang ? '<!-- AngularJS -->\n    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js" defer></script>' : skipper }
    ${inp_fa ? '<!-- Font Awesome -->\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" defer>' : skipper }
    ${inp_tw ? '<!-- Twemoji -->\n    <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" defer></script>\n    <script defer>twemoji.parse(document.body);</script>' : skipper }
    ${inp_jq ? '<!-- jQuery -->\n    <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>' : skipper }
</head>

<body>
<noscript>You need to enable JavaScript to run this app.</noscript>

<!-- Your page content goes here! -->

</body>
</html>`;



        let wrapper = document.querySelector('#wrapper');
        let pre = document.querySelector('#result');

        pre.innerText = resultingHTML;
        wrapper.style.display = 'block';
    }
}


function getCode() {
    // Extracting pre's innerText as select() is not a function on non visible elements
    let resultPre = document.querySelector("#result");
    const textArea = document.createElement('textarea');
    textArea.textContent = resultPre.innerText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
}

function isEmpty(val) {
    if ((val === '') || (val === null) || (val === undefined)) {
        return null;
    }
    return val;
}

function isNotEmpty(val) {
    if ((val === '') || (val === null) || (val === undefined)) {
        return false;
    }
    return true;
}