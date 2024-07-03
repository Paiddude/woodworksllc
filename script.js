console.log("hello worldss");
// const siteHeader = ;
// const siteFooter = document.getElementById("site-footer");

const headerDiv = document.createElement("div");
// const footDiv = document.createElement("div");

const headerContent = `
<div class="top-navigation">
	
		
<div class="mobile-navigation">
	<button class="menu-toggle button-toggle">
		<span>
			<i class="gbi gbicon-bars"></i>
			Menu		</span>
		<span>
			<i class="gbi gbicon-times"></i>
			Close		</span>
	</button>
</div>

<div class="drawer-wrap">
	<div class="drawer drawer-menu-explore">
		<nav id="drawer-navigation" class="drawer-navigation">
			<div class="menu-primary-container"><ul id="menu-primary" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25876"><a href="/index.html">Home</a></li><li id="menu-item-9" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9"><a>About</a>
<ul class="sub-menu">
	<li id="menu-item-16" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16"><a href="/about-us.html">The Wood Works Story</a></li>
	<li id="menu-item-26033" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26033"><a href="/our-team.html">Meet Our Teams</a></li>

	<li id="menu-item-25287" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25287"><a href="contact-us.html">Contact Us</a></li>
</ul>
</li>
<li id="menu-item-10" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10"><a>Products</a>
<ul class="sub-menu">
	<li id="menu-item-32" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"><a href="/products.html">View All Product Offerings</a></li>
</ul>
</li>

<li id="menu-item-25876" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25876"><a href="/operations.html">Operations</a></li>
<li id="menu-item-29312" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29312"><a href="/certification.html">Certification</a></li>

</ul></div>		</nav>
	</div>
</div>

		<div class="container">
			<div class="site-identity clear">
				
					<div class="site-title-wrap" itemscope itemtype="http://schema.org/Organization">
		
			<a href="index.html" class="custom-logo-link" rel="home" aria-current="page"><img width="500" height="124" src="/public/logo.png" class="custom-logo" alt="Timber Products" decoding="async" fetchpriority="high" srcset="/public/logo.png 500w, /public/logo.png 300w" sizes="(max-width: 500px) 100vw, 500px" /></a>
		<div class="titles-wrap 
		has-description		">
							<p class="site-title"><a href="https://timberproducts.com/" rel="home">Timber Products</a></p>
			
							<p class="site-description">From particle board and plywood to prefinished panels, Timber Products offers a comprehensive range of high-quality wood products. Learn more about our offerings!</p>
					</div>
	</div>
		
				<div class="top-navigation-right">
					
					<nav id="site-navigation" class="main-navigation" aria-label="Main">
						<div class="menu-primary-container"><ul id="menu-primary-1" class="menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25876"><a href="/index.html">Home</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9"><a>About</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16"><a href="/about-us.html">Our Company Story</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26033"><a href="/our-team.html">Meet Our Teams</a></li>

	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25287"><a href="/contact-us.html">Contact Us</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10"><a>Products</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"><a href="/products.html">View All Product Offerings</a></li>

</ul>
</li>

<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25876"><a href="/operations.html">Operations</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29312"><a href="/certification.html">Certification</a></li>

</ul></div>					</nav>
				</div>
			</div>
		</div>
	</div>
`;
document
  .querySelector(".site-header")
  .insertAdjacentHTML("afterbegin", headerContent);

const footerContent = `
	<div style='background-color: #272c30;' class="container">
		<div class="footer-widgets">
		<h2 class="screen-reader-text">Footer</h2>
												<div class="footer-column">
						<section id="media_image-3" class="widget widget_media_image"><h3 class="widget-title">&#032;</h3><img width="300" height="74" src="/public/logo.png" class="image wp-image-70  attachment-medium size-medium" alt="" style="max-width: 100%; height: auto;" decoding="async" loading="lazy" srcset="/public/logo.png 300w, /public/logo.png 500w" sizes="(max-width: 300px) 100vw, 300px" /></section>					</div>
																<div class="footer-column">
						<section id="nav_menu-8" class="widget widget_nav_menu"><h3 class="widget-title">About</h3><div class="menu-footer-about-container"><ul id="menu-footer-about" class="menu"><li id="menu-item-28121" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28121"><a href="about-us.html">Our Story</a></li>
<li id="menu-item-28122" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28122"><a href="our-team.html">Our Team</a></li>


</ul></div></section>					</div>
																<div class="footer-column">
						<section id="nav_menu-9" class="widget widget_nav_menu"><h3 class="widget-title">Products</h3><div class="menu-footer-products-container"><ul id="menu-footer-products" class="menu"><li id="menu-item-28125" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28125"><a href="products.html">All Products</a></li>
							<li id="menu-item-28125" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28125"><a href="operations.html">Operations</a></li>

</ul></div></section>					</div>
																
																<div class="footer-column">
						<section id="nav_menu-13" class="widget widget_nav_menu"><h3 class="widget-title">Resources</h3><div class="menu-footer-resources-container"><ul id="menu-footer-resources" class="menu"><li id="menu-item-28137" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28137"><a href="certification.html">Certifications Page</a></li>
<li id="menu-item-28138" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28138"><a href="contact-us.html">Contact Us</a></li>




</ul></div></section>					</div>
																
																</div>
		<div class="mailchimp-signup-form">
			<h4>Newsletter Sign Up</h4>
			<p>Sign up for Timberline, our quarterly newsletter, to receive the latest industry news.</p>
			<script>(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();
</script><form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-26916" method="post" data-id="26916" data-name="Email Sign Up" ><div class="mc4wp-form-fields"><label>Email Address</label> 
<input type="email" name="EMAIL" placeholder="Your email address" required />
<input class="footer-btn" type="submit" value="Sign up" />
</div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" value="1719316354" /><input type="hidden" name="_mc4wp_form_id" value="26916" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" /><div class="mc4wp-response"></div></form>		</div>
		<p class="copyright">&copy;2024 Wood Works LLC</p>
	</div>
`;

document
  .querySelector(".site-footer")
  .insertAdjacentHTML("afterBegin", footerContent);

// document.querySelector(".masthead").innerHTML = "<h1>Hello </h1>";

// document.getElementById("site-navigation").appendChild(headerDiv);

(function () {
  $(".gallery-link").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.find("figcaption").text() || item.el.attr("title");
      },
    },
    zoom: {
      enabled: true,
    },
    // duration: 300
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      tCounter: "",
    },
    disableOn: function () {
      return $(window).width() > 640;
    },
  });
}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLGFBQW5CLENBQ0U7SUFBQSxJQUFBLEVBQU0sT0FBTjtJQUNBLG1CQUFBLEVBQXFCLElBRHJCO0lBRUEsY0FBQSxFQUFnQixLQUZoQjtJQUdBLFNBQUEsRUFBVyw4QkFIWDtJQUlBLEtBQUEsRUFDRTtNQUFBLFdBQUEsRUFBYSxJQUFiO01BQ0EsUUFBQSxFQUFVLFFBQUEsQ0FBQyxJQUFELENBQUE7ZUFDUixJQUFJLENBQUMsRUFBRSxDQUFDLElBQVIsQ0FBYSxZQUFiLENBQTBCLENBQUMsSUFBM0IsQ0FBQSxDQUFBLElBQXFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBUixDQUFhLE9BQWI7TUFEN0I7SUFEVixDQUxGO0lBUUEsSUFBQSxFQUNFO01BQUEsT0FBQSxFQUFTO0lBQVQsQ0FURjs7SUFXQSxPQUFBLEVBQ0U7TUFBQSxPQUFBLEVBQVMsSUFBVDtNQUNBLGtCQUFBLEVBQW9CLEtBRHBCO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0FaRjtJQWVBLFNBQUEsRUFBVyxRQUFBLENBQUEsQ0FBQTthQUNULENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxLQUFWLENBQUEsQ0FBQSxHQUFvQjtJQURYO0VBZlgsQ0FERjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLmdhbGxlcnktbGluaycpLm1hZ25pZmljUG9wdXBcbiAgdHlwZTogJ2ltYWdlJ1xuICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlXG4gIGNsb3NlQnRuSW5zaWRlOiBmYWxzZVxuICBtYWluQ2xhc3M6ICdtZnAtd2l0aC16b29tIG1mcC1pbWctbW9iaWxlJ1xuICBpbWFnZTogXG4gICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICB0aXRsZVNyYzogKGl0ZW0pIC0+XG4gICAgICBpdGVtLmVsLmZpbmQoJ2ZpZ2NhcHRpb24nKS50ZXh0KCkgfHwgaXRlbS5lbC5hdHRyKCd0aXRsZScpXG4gIHpvb206XG4gICAgZW5hYmxlZDogdHJ1ZVxuICAgICMgZHVyYXRpb246IDMwMFxuICBnYWxsZXJ5OlxuICAgIGVuYWJsZWQ6IHRydWVcbiAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IGZhbHNlXG4gICAgdENvdW50ZXI6ICcnXG4gIGRpc2FibGVPbjogLT5cbiAgICAkKHdpbmRvdykud2lkdGgoKSA+IDY0MCAiXX0=
//# sourceURL=coffeescript
