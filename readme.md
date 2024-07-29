### What I learned today about Grid...
***Day 28th~ _July 29th 2024_***
_as uni directional grid system i learned about how to handle grid column and rows, though i'm not feeling safe with grid but i got to learn few things here_

1. grid template column can be declared like..
      ```css
      grid-template-column: 1fr 1fr 1fr;
      grid-template-column: 200px 200px 300px;
      grid-template-column: repeat(3, 1fr);
      grid-template-column: repeat(3, 200px);
      grid-template-column: repeat(auto-fill/auto-fit, 200px);
      grid-template-column: repeat(auto-fit,minmax(200px, 1fr));

      <!-- Grid-Colums and Rows -->
        div:nth-child(1){
            grid-column-start: 1;
            grid-column-end: 5;
        }
        <!-- in shortHand -->
            div:nth-child(1){
            grid-column:1/5;
            grid-column:grid-column-start/grid-column-end;
            grid-column:span 4/5;
            grid-column:span/grid-column-end;
            grid-column:1/span 4;
            grid-column:grid-column-start/span;
        }
            <!-- Same in Rows -->




      <!-- Grid Area-->
        div:nth-child(1){grid-area:header}
        div:nth-child(2){grid-area:main}
        div:nth-child(3){grid-area:footer}
        div:nth-child(4){grid-area:aside}
        grid-template-areas: 
        "header header header"
        "main main main aside"
        "main main main aside"
        "main main main aside"
        "footer footer footer"
      ``` 
      ***