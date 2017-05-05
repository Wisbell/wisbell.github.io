<!DOCTYPE html>
<html>
<head>
  <title>Westley Isbell - Web Developer Portfolio</title>
  <!-- Latest compiled and minified CSS -->

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  <link rel="stylesheet" type="text/css" href="style.css">

  <!-- Ensures proper rending and touch zooming -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <div class="container-fluid">

    <div class="row landing">
      <div class="landing__row">
        <div class="landing__info">
          <h1 class="col-md-12 landing__title animated zoomIn">Westley Isbell</h1>
          <p class="col-md-12 landing__item animated bounceInLeft">Junior Software Developer</p>
          <p class="col-md-12 landing__item landing__cohort-info animated bounceInUp">Cohort 17 - add Cohort 17 symbol here? and css animation</p>
        </div>
      </div>

      <!-- Navigation -->
      <div class="row navigation">
        <ul class="col-md-12 animated slideInDown">
          <!-- <li class="col-md-3 nav__item animated slideInLeft"><a class="nav__link" href="#">Home</a></li>
          <li class="col-md-3 nav__item animated slideInDown"><a class="nav__link" href="#">About</a></li>
          <li class="col-md-3 nav__item animated slideInDown"><a class="nav__link" href="#">Projects</a></li>
          <li class="col-md-3 nav__item animated slideInRight"><a class="nav__link" href="#">Contact</a></li> -->
          <li class="col-md-3 nav__item animated slideInLeft"><a class="nav__link" href="#about">About</a></li>
          <li class="col-md-3 nav__item animated slideInDown"><a class="nav__link" href="#projects">Projects</a></li>
          <li class="col-md-3 nav__item animated slideInRight"><a class="nav__link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>

    <div id="about" class="row about">
      <h1>About Me</h1>

      <div class="col-md-6">
        <img class="about__picture img-circle" src="/img/me_1.jpg">
      </div>
      <div class="col-md-6"> Right Col</div>
    </div>

    <div id="projects" class="row projects">
      <h1>My Projects</h1>

      <div class="col-md-12"> Full Col</div>
      <div class="col-md-12"> Tick Slack Toe</div>
      <div class="col-md-12"> Full Col</div>

      <div class="col-md-6"> Left Col</div>
      <div class="col-md-6"> Right Col</div>
    </div>

    <div id="contact" class="row contact">
      <h1 class="contact__title">Contact Information</h1>

      <!-- <div class="col-md-6"> Left Col</div> -->
      <!-- <div class="col-md-6"> Right Col</div> -->
      <div class="col-md-12 contact__info-wrapper">
        <a class="contact__link" target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=westleyisbell@gmail.com&tf=1">
        <!-- <img class="contact__image" src="/img/mail.png"> -->
        <img class="contact__image" src="/img/mail.png">
        <span class="contact__item">westleyisbell@gmail.com</span>
        </a>
      </div>
      <div class="col-md-12 contact__info-wrapper">
        <a class="contact__link" target="_blank" href="https://github.com/Wisbell/">
        <!-- <img class="contact__image contact__github" src="/img/pBeeJQDQ.png"> -->
        <img class="contact__image contact__github" src="/img/pBeeJQDQ.png">
        <span class="contact__item">Check out my code!</span>
        </a>
      </div>
      <div class="col-md-12 contact__info-wrapper">
        <a class="contact__link" target="_blank" href="https://www.linkedin.com/in/westley-isbell/">
        <!-- <img class="contact__image" src="/img/linked_in.png"> -->
        <img class="contact__image" src="/img/linked_in.png">
        <span class="contact__item">Lets connect!</span>
        </a>
      </div>
    </div>

  </div> <!-- Container Div End -->

<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</body>
</html>
