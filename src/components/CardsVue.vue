<template>
  <!-- NAVBAR -->
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Thriftshop</a>
        <div class="container-fluid">
          <div class="navbar-header">
            <div style="padding: 15px 0">
              <a href="#" id="msbo"><i class="ic fa fa-bars"></i></a>
            </div>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <ul class="dropdown-menu">
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Upgrade</a></li>
                  <li><a href="#">Help</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><i class="fa fa-bell-o"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-comment-o"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">MY ORDER</a></li>
                <li><a class="dropdown-item" href="#">CART</a></li>
                <li><a class="dropdown-item" href="#">PROMO & DISCOUNT</a></li>
                <li><a class="dropdown-item" href="#">SETTINGS</a></li>

                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- CARDS -->
    <form class="d-flex p-5" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div class="container">
      <div class="row">
        <div class="col-md-4 card m-5" style="width: 18rem">
          <img src="../assets/pic1.jpg" class="card-img-top" alt="#" />
          <div class="card-body">
            <h5 class="card-title"><strong>Outer Rajut H&M</strong></h5>
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </div>
            <br />
            <br />
            <div>
              <h5 class="priceTag">Rp. 35.000,-</h5>
            </div>
          </div>
        </div>

        <div class="col-md-4 card m-5" style="width: 18rem">
          <img src="../assets/pic2.jpg" class="card-img-top" alt="#" />
          <div class="card-body">
            <h5 class="card-title"><strong>Sweater Navy Uniqlo</strong></h5>
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </div>
            <br />
            <br />
            <div>
              <h5 class="priceTag">Rp. 40.000,-</h5>
            </div>
          </div>
        </div>

        <div class="col-md-4 card m-5" style="width: 18rem">
          <img src="../assets/pic3.jpg" class="card-img-top" alt="#" />
          <div class="card-body">
            <h5 class="card-title"><strong>Sweater Rajut Bershka</strong></h5>
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </div>
            <br />
            <br />
            <div>
              <h5 class="priceTag">Rp. 30.000,-</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsVue",
};
</script>

<style>
.rate {
  float: left;
  height: 46px;
  padding: 0 10px;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

.priceTag {
  float: left;
  padding-left: 10px;
}
</style>
