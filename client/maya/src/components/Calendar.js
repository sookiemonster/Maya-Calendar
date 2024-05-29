function Calendar() {
   let ROWS = 5;
   let COLS = 7;
   let cells = Array.from(Array(ROWS * COLS).keys());
   
   return (
   <div id="calendar">
      {cells.map((element, index) => <div class="cell" data-cell-id={index}>
         <span class="day-number">CELL</span>
      </div>)}
   </div>);
}
export default Calendar;