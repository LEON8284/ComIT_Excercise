let currentHour = prompt("Enter the current hour out of 0 to 23: ", 0);

if ( currentHour < 0 || currentHour >23) {
    alert( 'Your input is incorrent' );
  }
  if ( currentHour < 8 || currentHour >= 18 ) {
    alert( ' This hour is outside of office hours' );
  }
  if ( currentHour >= 8  && currentHour < 18 ) {
    alert( 'we are open!' );
  }
  
  