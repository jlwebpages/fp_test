
function write_header()
{
   document.open();

   var d = document;

   d.writeln('');
   d.writeln('<table id="header_row_1_desktop" style="margin: 0px auto; width: 75%">');
   d.writeln('   <tr>');
   d.writeln('      <td style="text-align: center; font-family: Tahoma; font-size: 30pt; letter-spacing: 4; padding-top: 50px; padding-bottom: 50px">DARLENE LAGUNA ART</td>');
   d.writeln('   </tr>');
   d.writeln('</table>');
   d.writeln('');
   d.writeln('<table id="header_row_1_mobile" style="margin: 0px auto; width: 75%; display: none">');
   d.writeln('   <tr>');
   d.writeln('      <td style="text-align: center; font-family: Tahoma; font-size: 20pt; letter-spacing: 4; padding-top: 50px; padding-bottom: 50px">DARLENE LAGUNA ART</td>');
   d.writeln('   </tr>');
   d.writeln('</table>');
   d.writeln('');
   d.writeln('<table id="header_row_2" style="padding-bottom: 50px; margin: 0px auto; width: 85%">');
   d.writeln('   <tr style="vertical-align: top; text-align: center; font-family: lato; color: darkslategray; font-size: 12pt; letter-spacing: 3">');
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

   d.close();

   return true;
}