function number_of_cells()
{
   
   var formatThousandsNoRounding = function(n, dp)
   {
       var e = '', s = e+n, l = s.length, b = n < 0 ? 1 : 0,
           i = s.lastIndexOf('.'), j = i == -1 ? l : i,
           r = e, d = s.substr(j+1, dp);
       while ( (j-=3) > b ) { r = ',' + s.substr(j, 3) + r; }
       return s.substr(0, j + 3) + r +
           (dp ? '.' + d + ( d.length < dp ?
                   ('00000').substr(0, dp - d.length):e):e);
   };
   
   var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets()
   var cells_count = 0;
   for (var i in sheets)
   {
       cells_count += (sheets[i].getMaxColumns() * sheets[i].getMaxRows());
   }
   
   var cells_limit = 2000000;
   var cells_left_use = cells_limit - cells_count;
   
   var cells_left = (1-((cells_left_use)/cells_limit))*100;
   var cell_percentage = cells_left.toFixed(2)+'%';
   
   var cells_free_space = ((cells_left_use / cells_limit)*100).toFixed(2)+'%';
   
   
   Logger.log('Used ('+formatThousandsNoRounding(cells_count) + ' cells >>'+ cell_percentage +')  & Left To Use( '+ formatThousandsNoRounding(cells_left_use) + ' cells >> '+ cells_free_space+')' )
}
