
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
   d.writeln('<div id="menu_list" class="menu">');
   d.writeln('   <a href="javascript:void(0)" class="close_button" onclick="close_menu()" onPress="display_menu()">&times;</a>');
   d.writeln('   <a href="#">HOME</a>');
   d.writeln('   <a href="#">NEW WORK</a>');
   d.writeln('   <a href="#">FEATURED WORK</a>');
   d.writeln('   <a href="#">PHOTO ART</a>');
   d.writeln('   <a href="#">WORKS ON PAPER</a>');
   d.writeln('   <a href="#">HOW TO PURCHASE</a>');
   d.writeln('   <a href="#">CONTACT</a>');
   d.writeln('</div>');
   d.writeln('<span id="menu" style="font-size: 30px; cursor: pointer; visibility: hidden" onclick="display_menu()" onPress="display_menu()">&#9776;</span>');
   d.writeln('');
   d.writeln('<table style="margin: 0px auto">');
   d.writeln('   <tr>');
   d.writeln('      <td style="text-align: center; font-family: Tahoma; font-size: 30pt; letter-spacing: 4px; padding-top: 0px; padding-bottom: 50px">DARLENE LAGUNA ART</td>');
   d.writeln('   </tr>');
   d.writeln('</table>');
   d.writeln('');
   d.writeln('<table id="header_row_2" style="padding-bottom: 50px; margin: 0px auto; width: 85%">');
   d.writeln('   <tr style="vertical-align: top; text-align: center; font-family: Lato; color: darkslategray; font-size: 12pt; letter-spacing: 3px">');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px">HOME</td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px">NEW WORK</td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px">FEATURED WORK</td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px">PHOTO ART</td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px">WORKS ON PAPER</td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px">HOW TO PURCHASE</td>');
   d.writeln('      <td style="padding-left: 10px; padding-right: 10px">CONTACT</td>');
   d.writeln('   </tr>');
   d.writeln('</table>');
   d.writeln('');
   d.writeln('');

   d.close();

   return true;
}