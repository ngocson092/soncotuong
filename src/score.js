var score = {};
// material values for B, S, T, M, P, X, Tg
score.mvalue = [0, 100, 250, 270, 400, 500, 1000, 10000];
// positional values
score.pvalue = [[]
,[
0, 0, 0, -20, 30, 50, 100, 100, 100, 0,
0, 0, 0, 0, 0, 90, 130, 150, 150, 0,
0, 0, 0, -20, 40, 120, 180, 220, 250, 0,
10, -80, -90, 0, 0, 170, 200, 270, 310, 20,
50, -80, -90, 60, 70, 200, 220, 300, 350, 40,
10, -80, -90, 0, 0, 170, 200, 270, 310, 20,
0, 0, 0, -20, 40, 120, 180, 220, 250, 0,
0, 0, 0, 0, 0, 90, 130, 150, 150, 0,
0, 0, 0, -20, 30, 50, 100, 100, 100, 0]
,[
0, 0, -20, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 30, 30, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, -20, 0, 0, 0, 0, 0, 0, 0]
,[
0, 0, -20, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 30, 30, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, -20, 0, 0, 0, 0, 0, 0, 0]
,[
0, -30, 50, 40, 20, 20, 50, 40, 20, 20,
-30, 20, 40, 60, 100, 120, 200, 100, 80, 20,
20, 40, 60, 100, 130, 110, 120, 110, 150, 20,
0, 50, 70, 70, 140, 150, 190, 150, 90, 80,
20, -100, 40, 100, 150, 160, 120, 110, 60, 20,
0, 50, 70, 70, 140, 150, 190, 150, 90, 80,
20, 40, 60, 100, 130, 110, 120, 110, 150, 20,
-30, 20, 40, 60, 100, 120, 200, 100, 80, 20,
0, -30, 50, 40, 20, 20, 50, 40, 20, 20]
,[
0, 0, 10, 0, -10, 0, 0, 10, 20, 40,
0, 10, 0, 0, 0, 0, 30, 10, 20, 40,
10, 20, 40, 0, 30, 0, 30, 0, 0, 0,
30, 20, 30, 0, 0, 0, 20, -50, -40, -50,
30, 20, 50, 0, 40, 40, 40, -40, -70, -60,
30, 20, 30, 0, 0, 0, 20, -50, -40, -50,
10, 20, 40, 0, 30, 0, 30, 0, 0, 0,
0, 10, 0, 0, 0, 0, 30, 10, 20, 40,
0, 0, 10, 0, -10, 0, 0, 10, 20, 40]
,[
-60, 50, -20, 40, 80, 80, 60, 60, 60, 60,
60, 80, 80, 90, 120, 110, 130, 80, 120, 80,
40, 60, 40, 40, 120, 110, 130, 70, 90, 70,
120, 120, 120, 120, 140, 140, 160, 140, 160, 130,
0, 0, 120, 140, 150, 150, 160, 160, 330, 140,
120, 120, 120, 120, 140, 140, 160, 140, 160, 130,
40, 60, 40, 40, 120, 110, 130, 70, 90, 70,
60, 80, 80, 90, 120, 110, 130, 80, 120, 80,
-60, 50, -20, 40, 80, 80, 60, 60, 60, 60]
,[
0, 0, 0, -20, 30, 50, 100, 100, 100, 0,
0, 0, 0, 0, 0, 90, 130, 150, 150, 0,
0, 0, 0, -20, 40, 120, 180, 220, 250, 0,
10, -80, -90, 0, 0, 170, 200, 270, 310, 20,
50, -80, -90, 60, 70, 200, 220, 300, 350, 40,
10, -80, -90, 0, 0, 170, 200, 270, 310, 20,
0, 0, 0, -20, 40, 120, 180, 220, 250, 0,
0, 0, 0, 0, 0, 90, 130, 150, 150, 0,
0, 0, 0, -20, 30, 50, 100, 100, 100, 0]
];

score.Board = [
    6, 0, 0, 1, 0, 0,-1, 0, 0, -6,
    4, 0, 5, 0, 0, 0, 0,-5, 0, -4,
    3, 0, 0, 1, 0, 0,-1, 0, 0, -3,
    2, 0, 0, 0, 0, 0, 0, 0, 0, -2,
    7, 0, 0, 1, 0, 0,-1, 0, 0, -7,
    2, 0, 0, 0, 0, 0, 0, 0, 0, -2,
    3, 0, 0, 1, 0, 0,-1, 0, 0, -3,
    4, 0, 5, 0, 0, 0, 0,-5, 0, -4,
    6, 0, 0, 1, 0, 0,-1, 0, 0, -6];

score.TgB = [59,58,57,49,48,47,39,38,37];
score.TgW = [30,31,32,40,41,42,50,51,52];
score.TW = [2,20,24,42,60,64,82];
score.TB = [87,69,65,47,29,25,7];

score.middle = function(x1, x2) {
  var d = Math.round(Math.abs(x1-x2)/10);
  if (d === 2) return ((x1%10 - x2%10) + x1 + x2)/2;
  return x1 < x2 ? (x1 + x2 - 10)/2 : (x1 + x2 + 10)/2;
}

// export as node module
var module = module || {};
module.exports = score;