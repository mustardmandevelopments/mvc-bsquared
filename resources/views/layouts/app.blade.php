<!--
  Aaron Young, Megan Palmer, Lucas Mathis, Peter Atwater, Sherri Miller
  Bob Fisher, Kathy Pratt, James Gibbs, Tanya Ulrich, Kyle Cleven, Jason Kessler-Holt
  Source for Navigation: http://cssmenumaker.com/
  Source for Hashing Algorithm: http://pajhome.org.uk/crypt/md5/sha512.html
  Source for Back-End(Tutorial):http://www.wikihow.com/Create-a-Secure-Login-Script-in-PHP-and-MySQL
  Source for Login Page: http://www.24psd.com/css3-login-form-template/
  Inspired by: http://www.noahglushien.com/
  FAQ Source: http://www.snyderplace.com/demos/collapsible.html

  CREATIVE COMMONS- All social media link and images used fall under CC
  http://creativecommons.org/licenses/by/3.0/legalcode


  The MIT License (MIT)

  Copyright (c) 2016-Present b[squared]

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR
  IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>b[squared] | @yield('PageTitle') </title>

    <!-- Stylesheets -->
    <link href="{{ asset('favicon.ico') }}"  rel="icon" type="image/ico">
    <link href='https://fonts.googleapis.com/css?family=Maven+Pro:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{{elixir('css/bootstrap.css')}}">
    <link href="{{ elixir('css/app.css') }}"  rel="stylesheet" type="text/css">

    <!-- JavaScript -->
    <script src="{{elixir('js/jquery.js')}}" type="text/javascript"></script>
    <script src="{{elixir('js/bootstrap.js')}}"></script>

    <script src="{{elixir('js/all.js')}}"></script>
    <script src="{{elixir('js/Bsquared.js')}}"></script>

    @yield('uniqueHeaderInformation')

</head>
<body class="container">
    @yield('Navigation')

    @yield('BodyContent')

            <!--Footer-->
    <footer class="container navbar-fixed-bottom">
        <p id="socialMediaFooter">
            <a target ="_blank" title="follow me on facebook" href="https://www.facebook.com/groups/641262162679997/">
                <img src="{{ asset('images/icons/FB2.png')}}"
                     width="20" height="20" alt="follow bsquared on facebook"  border=0>
            </a>
            <a target ="_blank" href="https://www.linkedin.com/in/aaron-young-48a359b2?trk=hp-identity-name" >
                <img src="{{ asset('images/icons/linkedin-square-social-media2.png') }}"
                     width="20" height="20" alt="View Binary Beasts's LinkedIn profile"  border="0">
            </a>
            <a target="_blank" href="https://github.com/mustardmandevelopments/mvc-bsquared">
                <img src="{{ asset('images/icons/github-square-social-media2.jpg') }}"
                     width="20" height="20" alt="View this site with github" border="0">
            </a>
        </p>
        <p><a href="{{url('/faq')}}">b<span>[</span>squared<span>]</span></a>  &nbsp; <span>&#9672;</span> &nbsp;
            &copy; <span id="footerYear"></span>&nbsp; <span>&#9672;</span>&nbsp;
            <a target="_blank " href="{{url('#')}}">Privacy Policy</a>
        </p>
    </footer>
    @yield('ExtraJavaScript')
</body>
</html>
