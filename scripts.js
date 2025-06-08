
function write_header()
{
   document.open();

   var d = document;

   d.writeln('');
   d.writeln('');
   d.writeln('<table style="margin: 0px auto; width: 75%">');
   d.writeln('');
   d.writeln('  <tr>');
   d.writeln('      <td style="text-align: center; font-size: 30pt; letter-spacing: 4; padding-top: 50px; padding-bottom: 50px" colspan=7>DARLENE LAGUNA ART</td>');
   d.writeln('   </tr>');
   d.writeln('');
   d.writeln('</table>');
   d.writeln('');
   d.writeln('<table id="header_table_2" style="margin: 0px auto; width: 75%">');
   d.writeln('');
   //d.writeln('   <span style="padding-bottom: 50px"');
   d.writeln('');
   d.writeln('   <tr style="vertical-align: top; text-align: center; font-family: lato; color: darkslategray; font-size: 12pt; letter-spacing: 3; max-width: 50%">');
   d.writeln('      <td style="padding-bottom: 50px">HOME</td>');
   d.writeln('      <td>NEW WORK</td>');
   d.writeln('      <td>FEATURED WORK</td>');
   d.writeln('      <td>PHOTO ART</td>');
   d.writeln('      <td>WORKS ON PAPER</td>');
   d.writeln('      <td>HOW TO PURCHASE</td>');
   d.writeln('      <td>CONTACT</td>');
   d.writeln('   </tr>');
   d.writeln('');
   //d.writeln('   </span>');
   d.writeln('');
   d.writeln('');
   d.writeln('</table>');

   d.close();

   return true;
}