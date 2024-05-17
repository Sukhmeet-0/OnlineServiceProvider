"use strict";
jQuery(window).on("load", function() {
  /* PRELOADER*/
  jQuery(".preloader-outer").delay(500).fadeOut();
  jQuery(".sv-preloader-holder").delay(200).fadeOut("slow");
      
  /* MOBILE MENU*/
  if (jQuery(window).width() < 992) {
        jQuery('.menu-item-has-children > a, .page_item_has_children > a').on('click', function() {
        jQuery(this).closest('li').toggleClass('sv-open-menu');
        jQuery(this).next().slideToggle(300);
      });
  }

  // Section Preloader
  jQuery(function() {
    jQuery(".sv-filterbtns .sv-pb").on("click", function() {
      jQuery(".sv-section-preloader").addClass("sv-loadersection");
      setTimeout(removeloader, 2000);
    });
    function removeloader() {
      jQuery(".sv-section-preloader").removeClass("sv-loadersection");
    }
  });
  
  // VenoBox Video Popup
  let sv_venobox = document.querySelector(".sv-venobox");
  if (sv_venobox !== null) {
    jQuery(".sv-venobox").venobox({
      spinner: "cube-grid",
    });
  }
  
  // input focus
  jQuery(".sv-inputicon input").on("click", function() {
    jQuery(this).closest(".sv-inputicon").addClass("active");
  });
  
  // input asteric
  jQuery(".sv-placeholder").on("click", function() {
    jQuery(this).siblings(".sv-input-field").focus();
  });
  
  jQuery(".sv-input-field").on("input", function() {
    jQuery(this).siblings(".sv-placeholder").hide();
    if (jQuery(this).val().length === 0)
      jQuery(this).siblings(".sv-placeholder").show();
  });
  
  jQuery(".sv-input-field").on("blur", function() {
    if (jQuery(this).val().length === 0) {
      jQuery(this).siblings(".sv-placeholder").show();
      jQuery(this).closest(".sv-inputicon").removeClass("active");
    }
  });
  
  jQuery(".sv-input-field").blur();
  jQuery(".sv-calendar .sv-input-field").on("click", function() {
    jQuery(this).siblings(".sv-placeholder").addClass("d-none");
  });

  function showValues() {
    var inputs = $(".sv-input-field[value]");
    inputs.each(function() {
      var value = $(this).attr("value");
      if (value.length > 0) {
        jQuery(this).siblings(".sv-placeholder").hide();
      } else if (value.length === 0) {
        jQuery(this).siblings(".sv-placeholder").show();
      }
    });
  }
  showValues();
  
  // header icon button click
  jQuery(".sv-formicon").on("click", function() {
    jQuery(this).closest(".sv-navbar").addClass("sv-searchopen");
    jQuery(".sv-bannerv2").addClass("tk-bannerheight");
  });
  
  jQuery(".sv-formcloseicon").on("click", function() {
    jQuery(this).closest(".sv-navbar").removeClass("sv-searchopen");
  });
  
  // active class toggle on hover
  setTimeout(function() {
    jQuery(".sv-faq-category").on("mouseover", function() {
      var sv_className = jQuery(this).attr("class");
      var sv_hoverClassName = sv_className.split(" ")[0];
      var sv_ActiveClass = sv_hoverClassName + "-active";
      jQuery("." + sv_hoverClassName).removeClass(sv_ActiveClass);
      jQuery(this).addClass(sv_ActiveClass);
    });
  }, 0);
  
  // show services
  jQuery("#sv-selectservices").on("click", function(e) {
    jQuery(".sv-serviceswizard").css("display", "flex");
  });
  
  jQuery(".sv-wizardtitle a span").on("click", function(e) {
    jQuery(".sv-serviceswizard").css("display", "none");
  });
  
  // if checkbox checked
  jQuery(".sv-bhours_title-right .form-check").on("click", function() {
    var _this = jQuery(this);
    jQuery(this).closest(".sv-bhours").find(".sv-bhourstimeslot").toggleClass("d-none");
    jQuery(this).closest(".sv-bhours").find(".sv-bhours_markarea").toggleClass("d-none");
	
    if (_this.attr("aria-expanded") === "true") {
      _this.attr("data-bs-toggle", "");
    } else {
      _this.attr("data-bs-toggle", "collapse");
    }
  });
  
  // select2
  jQuery(".sv-selectv").select2({
    width: "196",
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth: true,
  });
  
  var config = {
    "#selectv1": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv1a":{ allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv2": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv3": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv4": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv5": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv6": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv7": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv8": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv20": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv21": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv31": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv41": { allowClear: true,minimumResultsForSearch: Infinity, },
    "#selectv51": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv61": {allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv71": { allowClear: true,minimumResultsForSearch: Infinity, },
    "#selectv10": { allowClear: true, },
    "#selectv11": {allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv12": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv12a": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv12b": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv12c": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv12d": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv12e": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv13": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv13a": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv13b": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv13c": { allowClear: true,minimumResultsForSearch: Infinity, },
    "#selectv13d": { allowClear: true, minimumResultsForSearch: Infinity,},
    "#selectv13e": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv13f": { allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv14": {  allowClear: true,},
    "#selectv15": {  allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv16": {  allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv17": {  allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv18": {  allowClear: true, minimumResultsForSearch: Infinity, },
    "#selectv19": {  allowClear: true, minimumResultsForSearch: Infinity, },
  };
  
  jQuery("[data-placeholderinput]").each(function(item) {
    var data_placeholder = jQuery("[data-placeholderinput]")[item];
    var sv_id = jQuery(data_placeholder).attr("id");
    var sv_placeholder = jQuery(data_placeholder).attr("data-placeholderinput");
    jQuery("#" + sv_id).on("select2:open", function(e) {
      jQuery("input.select2-search__field").prop("placeholder", sv_placeholder);
      console.log(jQuery("input.select2-search__field").prop("placeholder", sv_placeholder))
    });
  });
  
  for (var selector in config) {
    jQuery(selector).select2(config[selector]);
  }
  jQuery("select").on("select2:open", function(e) {
    jQuery(".select2-results__options").mCustomScrollbar("destroy");
    setTimeout(function() {
      jQuery(".select2-results__options").mCustomScrollbar();
    }, 0);
  });
  
  // remove li
  jQuery(".sv-thumbnails_action span, .sv-formarea_list li a, .sv-labels li span a, .sv-undayslist_content > a, .sv-doclist_content > a").on("click", function() {
    jQuery(this).closest("li").remove();
  });
  
  jQuery(".sv-bhourstimeslot_list > a").on("click", function() {
    jQuery(this).closest(".sv-bhourstimeslot_list").remove();
  });

  // drag able start
  var sv_accordionsortable = document.getElementById("wrappersortable");
  if (sv_accordionsortable !== null) {
    var sv_accordionsortable = Sortable.create(sv_accordionsortable, {
      animation: 350,
    });
  }
  
  var sv_accordionsortablevtwo = document.getElementById("wrappersortablevtwo");
  if (sv_accordionsortablevtwo !== null) {
    var sv_accordionsortablevtwo = Sortable.create(sv_accordionsortablevtwo, {
      animation: 350,
    });
  }
  
  var sv_sortinneraccord = document.getElementById("sv-sortinneraccord");
  if (sv_sortinneraccord !== null) {
    var sv_sortinneraccord = Sortable.create(sv_sortinneraccord, {
      animation: 350,
    });
  }
  
  var sv_sortinneraccord1 = document.getElementById("sv-sortinneraccord1");
  if (sv_sortinneraccord1 !== null) {
    var sv_sortinneraccord1 = Sortable.create(sv_sortinneraccord1, {
      animation: 350,
    });
  }
  
  var sv_sortinneraccord2 = document.getElementById("sv-sortinneraccord2");
  if (sv_sortinneraccord2 !== null) {
    var sv_sortinneraccord2 = Sortable.create(sv_sortinneraccord2, {
      animation: 350,
    });
  }
  
  var sv_sortinneraccord3 = document.getElementById("sv-sortinneraccord3");
  if (sv_sortinneraccord3 !== null) {
    var sv_sortinneraccord3 = Sortable.create(sv_sortinneraccord3, {
      animation: 350,
    });
  }
  
  var sv_expsortable = document.getElementById("sv-expsortable");
  if (sv_expsortable !== null) {
    var sv_expsortable = Sortable.create(sv_expsortable, {
      animation: 350,
    });
  }
  
  var sv_brancheswrapper = document.getElementById("sv-brancheswrapper");
  if (sv_brancheswrapper !== null) {
    var sv_brancheswrapper = Sortable.create(sv_brancheswrapper, {
      animation: 350,
    });
  }
  
  var sv_teamwrapper = document.getElementById("sv-teamwrapper");
  if (sv_teamwrapper !== null) {
    var sv_teamwrapper = Sortable.create(sv_teamwrapper, {
      animation: 350,
    });
  }
  
  // toogle active class on form banner
  jQuery(window).on("click",function(e) {
    if (!jQuery(e.target).is(".sv-dropdownholder")) {
      jQuery(".sv-dropdownholder .collapse").collapse("hide");
    }
  });
  jQuery(".sv-dropdownholder .sv-input").on("click", function(e) {
    e.stopPropagation();
  });
  
  //read more
  var sv_categoriesfilter = document.querySelector(".sv-categoriesfilter");
  if (sv_categoriesfilter !== null) {
    sv_categoriesfilter = {
      collapsedHeight: 240,
      moreLink: '<a href="javascript:void(0);" class="sv-readmorebtn">Show more</a>',
      lessLink: '<a href="javascript:void(0);" class="sv-readmorebtn">Show Less</a>',
    };
	
    jQuery(".sv-categoriesfilter").readmore(sv_categoriesfilter);
  }
  
  var tk_showcategories = document.querySelector(".sv-exploremore");
  if (tk_showcategories !== null) {
    tk_showcategories = {
      collapsedHeight: 205,
      moreLink: '<a href="javascript:void(0);" class="sv-readmorebtnv2">Show All</a>',
      lessLink: '<a href="javascript:void(0);" class="sv-readmorebtnv2">Show Less</a>',
    };
    jQuery(".sv-exploremore").readmore(tk_showcategories);
  }
  
  // custom load more
  let classes = [
    '.accordion .sv-accordion-item',
    '.sv-brancheswrapper .sv-brancheslist',
    '.sv-teamwrapper li'
  ];
  
  for ( let i = 0; i < classes.length; ++i) {
    if (classes[i].length <= 3) {
      jQuery(".sv-show_more").hide();
    } 
    else if (classes[i].length >= 3) {
      jQuery(".sv-show_more").show();
      jQuery(".sv-accordion-item:nth-child(n+4), .sv-brancheslist:nth-child(n+5), .sv-teamwrapper li:nth-child(n+9)").hide();
    }
  }

  jQuery(".sv-show_more").on("click", function() {
    jQuery(this).text($(this).text() === "Load Less" ? "Load More" : "Load Less");
    jQuery(this).closest(".accordion").find(".sv-accordion-item:nth-child(n+4)").slideToggle();
    jQuery(this).closest(".sv-tabswrapper").find(".sv-brancheslist:nth-child(n+5)").slideToggle();
    jQuery(this).closest(".sv-tabswrapper").find(".sv-teamwrapper li:nth-child(n+9)").slideToggle();
  });
  
  jQuery(".sv-asidetitle").on("click", function() {
    setTimeout(function() {
      jQuery(".sv-categoriesfilter").readmore(sv_categoriesfilter);
    }, 200);
  });
  
  // active class
  jQuery(".sv-bhours_title").on("click", function() {
    jQuery(".sv-bhours").removeClass("active");
  });

  //toggle two classes on mobile menu
  jQuery(".sv-dbmenu").on("click", function() {
    jQuery(".sv-dbsidenav").toggleClass("sv-opendbmenu");
  });

  // range mater collapse
  jQuery(".sv-rangevalue").on("click",function() {
    jQuery("#sv-rangecollapse").collapse("show");
  });

  // lite picker
  var pickers = document.querySelectorAll(".sv-datepicker");
  jQuery(pickers).each(function(index) {
    var picker = new Litepicker({
      element: pickers[index],
      singleMode: false,
      start: new Date(),
      maxDate: new Date(),
      tooltipText: {
        one: "night",
        other: "nights",
      },
      tooltipNumber: (totalDays) => {
        return totalDays - 1;
      },
    });
  });
  
  var sv_detailslitepicker = document.querySelector(".sv-detailslitepicker");
  if (sv_detailslitepicker !== null) {
    new Litepicker({
      element: document.querySelector(".sv-detailslitepicker"),
      numberOfMonths: 1,
      numberOfColumns: 1,
      inlineMode: true,
      singleMode: true,
      useResetBtn: true,
    });
  }
  
  var sv_datepick = document.querySelector(".datepickerv2");
  if (sv_datepick !== null) {
    new Litepicker({
      element: document.querySelector(".datepickerv2"),
      start: new Date(),
      maxDate: new Date(),
      previousMonth: true,
      nextMonth: true,
      selectForward: true,
      tooltipText: {
        one: "night",
        other: "nights",
      },
      years: {
        min: 1900,
        max: null,
      },
      months: true,

      tooltipNumber: (totalDays) => {
        return totalDays - 1;
      },
    });
  }

  // Tinymce
  tinymce.init({
    selector: "textarea.sv-textarea",
    height: 280,
    menubar: false,
    statusbar: false,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste code help wordcount",
    ],
    toolbar: "undo redo | formatselect | " +
      "bold italic backcolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "removeformat | help",
    content_css: ["css/tinymce/tinymce.css"],
  });

  //show more button
  jQuery("#sv-showmore").on("click",function() {
    jQuery(".sv-button-disapear").show();
    jQuery(".sv-button-disapear").removeClass("out").addClass("active");
    jQuery("#sv-showmore").parent("li").hide();
  });

  jQuery(".sv-headerform select").select2().on("select2:open", () => {
    jQuery(".select2-dropdown").addClass("sv-select2-custom-width");
  });

  // Service detail sync slider
  var sv_splide = document.getElementById("sv_splide");
  if (sv_splide != null) {
    var secondarySlider = new Splide("#sv_splidev2", {
      direction: "ttb",
      gap: 10,
      type: "loop",
      arrows: true,
      height: "100%",
      rewind: false,
      focus: "center",
      fixedWidth: 100,
      fixedHeight: 100,
      isNavigation: true, 
      pagination: false,
      updateOnMove: true,
    }).mount();
    var primarySlider = new Splide("#sv_splide", {
      type: "fade",
      pagination: false,
      cover: true,
      arrows: false,
      breakpoints: {
        1199: {
          pagination: true,
          autoplay: true,
        },
      },
    });
    primarySlider.sync(secondarySlider).mount();
  }
  
  // Popular slider
  var sv_popularservices = document.getElementById("sv-trendingserviceslider");
  if (sv_popularservices != null) {
    var splide = new Splide("#sv-trendingserviceslider", {
      type: "loop",
      perPage: 3,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 24,
      breakpoints: {
        1199: {
          perPage: 2,
        },
        767: {
          perPage: 1,
          gap: 0,
        },
      },
    });
    splide.mount();
  }

  // FAQS slider
  var sv_faqsslider = document.getElementById("sv-faqsslider");
  if (sv_faqsslider != null) {
    var splide = new Splide("#sv-faqsslider", {
      type: "loop",
      perPage: 4,
      perMove: 1,
      arrows: true,
      pagination: false,
      gap: 20,
      breakpoints: {
        1400: {
          perPage: 3,
        },
        991: {
          perPage: 2,
        },
        575: {
          perPage: 2,
          gap: 20,
          arrows: false,
          pagination: true,
          focus: "center",
        },
        480: {
          perPage: 1,
          arrows: false,
          pagination: true,
          focus: "center",
        },
      },
    });
    splide.mount();
  }

  // RangeSlider
  var softSlider = document.getElementById("sv-rangeslidertwo");
  if (softSlider != null) {
    noUiSlider.create(softSlider, {
      start: 256,
      connect: "lower",
      range: {
        min: 0,
        max: 500,
      },
      format: wNumb({
        decimals: 0,
      }),
    });
    var slider1Value = document.getElementById("slider1-span");

    softSlider.noUiSlider.on("update", function(values, handle) {
      slider1Value.innerHTML = values[handle];
    });
  }

  var stepsSlider = document.getElementById("sv-rangeslider");
  if (stepsSlider !== null) {
    var input0 = document.getElementById("sv-min-value");
    var input1 = document.getElementById("sv-max-value");
    var inputs = [input0, input1];

    noUiSlider.create(stepsSlider, {
      start: [200, 400],
      connect: true,
      range: {
        min: 0,
        max: 600,
      },
      format: {
        to: (v) => parseFloat(v).toFixed(0),
        from: (v) => parseFloat(v).toFixed(0),
        suffix: " (US $)",
      },
    });
    stepsSlider.noUiSlider.on("update", function(values, handle) {
      inputs[handle].value = values[handle];
    });
    inputs.forEach(function(input, handle) {
      input.addEventListener("change", function() {
        stepsSlider.noUiSlider.setHandle(handle, this.value);
      });
      input.addEventListener("keydown", function(e) {
        var values = stepsSlider.noUiSlider.get();
        var value = Number(values[handle]);
        var steps = stepsSlider.noUiSlider.steps();
        var step = steps[handle];
        var position;
        switch (e.which) {
          case 13:
            stepsSlider.noUiSlider.setHandle(handle, this.value);
            break;
          case 38:
            position = step[1];
            if (position === false) {
              position = 1;
            }
            if (position !== null) {
              stepsSlider.noUiSlider.setHandle(handle, value + position);
            }
          break;
          case 40:
            position = step[0];
            if (position === false) {
              position = 1;
            }
            if (position !== null) {
              stepsSlider.noUiSlider.setHandle(handle, value - position);
            }
          break;
        }
      });
    });
  }

  // Tippy Start
  const sv_industrypro = document.getElementById("sv-industrypro");
  if (sv_industrypro !== null) {
    tippy('[data-tippy-html="#sv-industrypro"]', {
      content: sv_industrypro.innerHTML,
      allowHTML: true,
      animation: "scale",
    });
  }
  const sv_catogery = document.getElementById("sv-catogery");
  if (sv_catogery !== null) {
    tippy('[data-tippy-html="#sv-catogery"]', {
      content: sv_catogery.innerHTML,
      allowHTML: true,
      animation: "scale",
    });
  }
  const sv_verifed = document.getElementById("sv-verifed");
  if (sv_verifed !== null) {
    tippy('[data-tippy-html="#sv-verifed"]', {
      content: sv_verifed.innerHTML,
      allowHTML: true,
      animation: "scale",
    });
  }

  const sv_trending = document.getElementById("sv-trending");
  if (sv_trending !== null) {
    tippy('[data-tippy-html="#sv-trending"]', {
      content: sv_trending.innerHTML,
      allowHTML: true,
      animation: "scale",
    });
  }
  const sv_socailmediatippy = document.getElementById("sv-socailmediatippy");
  if (sv_socailmediatippy !== null) {
    tippy('[data-tippy-html="#sv-socailmediatippy"]', {
      content: sv_socailmediatippy.innerHTML,
      allowHTML: true,
      animation: "scale",
    });
  }

  const sv_socailmediatippytwo = document.getElementById("sv-socailmediatippyv-two");
  if (sv_socailmediatippytwo !== null) {
    tippy('[data-tippy-html="#sv-socailmediatippyv-two"]', {
      content: sv_socailmediatippytwo.innerHTML,
      allowHTML: true,
      animation: "scale",
    });
  }

  // copy clipboard
  let sv_coppy = document.querySelector("#sv-copy");
  if (sv_coppy !== null) {
    tippy("#sv-copy", {
      duration: 500,
      arrow: false,
      trigger: "click",
    });
  }

	// dhb sidebar dropdown
	jQuery('.sv-dbnavlist > .active .sv-sidebar-submenu').css('display', 'block')
	jQuery(document).on('click', '.sv-sidebar-dropdown > a', function(){
	var _this = jQuery(this)
		_this.closest('li').siblings().children('.sv-sidebar-submenu').slideUp(300)
		_this.next().slideToggle(300)
		_this.closest('li').siblings().removeClass('active')
		_this.closest('li').toggleClass('active')
	})

  // Toogle Save Icon
  jQuery(".sv-iconheart").on("click", function() {
    jQuery(this).children("i.icon-heart").addClass("sv-colorred");
    jQuery(this).children("span").text("Saved");
  });

  // show detail
  jQuery("#show_it").on("click", function() {
    var h = $(".sv-bookingwrapper .sv-deniedarea").height();
    jQuery(".sv-bookingwrapper .sv-deniedarea").css("height", "0%");
    jQuery(".sv-bookingwrapper .sv-deniedarea").animate({
        h: "100%",
      },
      1000,
      function() {}
    );
    jQuery(".sv-showdetails").css("display", "none");
  });
  
  // SHOWCHAT
  jQuery(".sv-btnlist .sv-btnorangesm,.sv-freelancdetail .sv-btnarea .sv-btngray,.sv-freelancerlistinfo .sv-btnarea .sv-btngray,sv-startchat").on("click", function() {
    jQuery("body").addClass("sv-overlay");
    jQuery(".sv-chatsidebar").animate({
      width: 400,
      right: 0,
      display: "block",
    });
  });

  jQuery(".sv-chatperson a").on("click",function() {
    jQuery("body").removeClass("sv-overlay");
    jQuery(".sv-chatsidebar").animate({
      width: 0,
      right: -1000,
      display: "none",
    });
  });

  jQuery(".sv-savedwrapper .sv-plainbtn").on("click",function(){
    jQuery(this).closest('.sv-saveditems li').remove();
  });

  // add active class on inbox
  jQuery('.sv-chat_sidebar .sv-userbar').on("click",function(e) {
    jQuery('.sv-chat_sidebar .sv-userbar').removeClass("active");
    jQuery(this).addClass("active");
  });
  // ADD REPLAY CLASS
  jQuery('.sv-replay_upload > a').on('click',function(e){
    e.stopPropagation();
    jQuery(".sv-replay_upload").toggleClass("sv-uploadoption_open");
  });

  // OUTSIDE CLICK CLOSE
  jQuery(window).on("click",function(e) {
    jQuery(".sv-replay_upload").removeClass("sv-uploadoption_open");
  });

  // ADD CLASS
  jQuery('.sv-userbar').on("click",function(e) {
    jQuery(this).parents('body').addClass("sv-opnchatbox");
  });

  // RESPONSIVE chat box
  jQuery('.sv-userinfo_title > a').on("click",function(e) {
    jQuery('body').removeClass('sv-opnchatbox')
  });

  function responsive(){
    var width = jQuery('body').width();
    if (width <= 1199){
      jQuery('body').addClass('sv-chat991')
      jQuery('.sv-removechat').on("click",function(e) {
        jQuery(this).parents('body').removeClass("sv-opnchatbox");
        jQuery('.sv-chatfloat').slideDown();
      });
    }
    if (width <= 640){
      jQuery('body').addClass('sv-chat640')
    }
    if (width <= 575){
      jQuery('body').addClass('sv-chat575')
    }
    if (width <= 480){
      jQuery('body').addClass('sv-chat480')
    }
    if (width <= 420){
      jQuery('body').addClass('sv-chat420')
    }
  }

  responsive()
    jQuery(window).resize(function() {
    responsive()
  });

  // Add blur class
  jQuery(".sv-deactivebtn > a").on("click",function(e){
    jQuery("body").addClass("sv-blur");
    e.stopPropagation();
  }) 
  jQuery( ".modal-content" ).on("click", function( event ) {
    event.stopPropagation();
  }); 

  jQuery(document).on("click",function(e) {
    jQuery("body").removeClass("sv-blur");
  });
  
  jQuery(".sv-plainbtn").on("click",function(e) {
    jQuery("body").removeClass("sv-blur");
  });
});