(async () => {
  await import('https://code.jquery.com/jquery-3.3.1.min.js')
  // Library ready
  console.log(jQuery)
  
  
  
  
  
  
  
  $('.bet-order-panel').before(`<div id="_help">
 <button>0</button><button>1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button><button>7</button><button>8</button><button>9</button>
 </div>`);
 $('#_help button').css({
  'width': '60px',
  'font-size': '1.6em'
 });
 $('#_help button').click(function(e) {
  const n = parseInt($(this).text());
  console.log(n+1);
  
  $('.play-area .tools li:first-child span').click();
  $('.play-area .balls.smwidth li:nth-child('+(n+1)+') span').click();
 });
 $('#_help button').dblclick(function(e) {
  $('.btn-liji').click();
 })
})()
