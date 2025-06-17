
function close_menu()
{
   document.getElementById("menu_list").style.width = "0";
}

function display_menu()
{
   document.getElementById("menu_list").style.width = "250px";
}

function write_header()
{
   document.open();

   var d = document;

   d.writeln('');
   d.writeln('');
   d.writeln('<span id="menu" style="font-size: 30px; cursor: pointer; visibility: hidden; padding-left: 5px" onclick="display_menu();" onPress="display_menu();">&#9776;</span>');
   d.writeln('');
   d.writeln('<div id="menu_list" class="menu">');
   d.writeln('   <a href="javascript:void(0)" class="close_button" onclick="close_menu();" onPress="close_menu();">&times;</a>');
   d.writeln('   <a href="home.html"           >HOME</a>');
   d.writeln('   <a href="new_work.html"       >NEW WORK</a>');
   d.writeln('   <a href="featured_work.html"  >FEATURED WORK</a>');
   d.writeln('   <a href="photo_art.html"      >PHOTO ART</a>');
   d.writeln('   <a href="works_on_paper.html" >WORKS ON PAPER</a>');
   d.writeln('   <a href="how_to_purchase.html">HOW TO PURCHASE</a>');
   d.writeln('</div>');
   d.writeln('');
   d.writeln('<table class="white_table">');
   d.writeln('   <tr>');
   d.writeln('      <td id="title" class="title" style="padding-top: 0px; padding-bottom: 25px">DARLENE LAGUNA ART</td>');
   d.writeln('   </tr>');
   d.writeln('');
   d.writeln('</table>');
   d.writeln('');
   d.writeln('<table id="links" class="white_table" style="padding-bottom: 50px; width: 80%; white-space: nowrap">');
   d.writeln('   <tr>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px"><a id="home"            class="link" href="home.html"           >HOME</a></td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px"><a id="new_work"        class="link" href="new_work.html"       >NEW WORK</a></td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px"><a id="featured_work"   class="link" href="featured_work.html"  >FEATURED WORK</a></td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px"><a id="photo_art"       class="link" href="photo_art.html"      >PHOTO ART</a></td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px"><a id="works_on_paper"  class="link" href="works_on_paper.html" >WORKS ON PAPER</a></td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px"><a id="how_to_purchase" class="link" href="how_to_purchase.html">HOW TO PURCHASE</a></td>');
   d.writeln('   </tr>');
   d.writeln('</table>');
   d.writeln('');
   d.writeln('');

   d.close();

   return true;
}