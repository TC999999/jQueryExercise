//1
$(document).ready(function () {
  console.log("Let's get ready to party with jQuery!");
});

//2
$("article img").addClass("image-center");

//3
$("article p:last-of-type").remove();

//4
$("#title").css("fontSize", `${Math.floor(Math.random() * 101)}px`);

//5
$("ol").append($("<li>").text("whatever you want"));

//6
$("aside").text("Actually, lists are silly. I'm sorry for including one.");

//7
$(".form-control").on("change", function () {
  $("body").css(
    "backgroundColor",
    `rgb(${$(".form-control").eq(0).val()}, ${$(".form-control")
      .eq(1)
      .val()}, ${$(".form-control").eq(2).val()})`
  );
});

//8
$("img").on("click", function () {
  $(this).remove();
});
