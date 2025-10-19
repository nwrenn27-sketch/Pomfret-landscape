// Pomfret School - Test Version (just 3 buildings to test)
// Minimal test to verify Turtletoy API works

const testData = [
  [[0.0033,0.0002],[0.0034,0.0002],[0.0034,0.0],[0.0033,0.0],[0.0033,0.0002]],
  [[0.0056,0.0],[0.0052,-0.0001],[0.005,0.0001],[0.0056,0.0]],
  [[0.0046,0.0001],[0.0048,0.0001],[0.0048,0.0],[0.0046,0.0]]
];

function walk(i) {
  if(i >= testData.length) return false;

  const p = testData[i];
  if(!p || p.length < 2) return true;

  // Jump to first point (pen up)
  jump([p[0][0]*8000, p[0][1]*8000]);

  // Draw outline (pen down)
  for(let j=1; j<p.length; j++) {
    goto([p[j][0]*8000, p[j][1]*8000]);
  }

  // Close polygon
  goto([p[0][0]*8000, p[0][1]*8000]);

  return true;
}
