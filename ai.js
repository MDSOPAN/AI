const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let weights = [0.0, 0.0, 0.0, 0.0];
document.querySelectorAll(".weights input").forEach((el, idx) => {
  el.addEventListener("input", (e) => {
    weights[idx] = e.target.value;
  });
});

document.querySelector(".vis").addEventListener("click", () => {
  visual();
});

const visual = () => {
  for (let i = 0; i <= canvas.width; i++) {
    for (let j = 0; j <= canvas.height; j++) {
      visualize(i, j);
    }
  }
};
const classify = (input_1, input_2) => {
  let output_1 = input_1 * weights[0] + input_1 * weights[1];
  let output_2 = input_2 * weights[2] + input_2 * weights[3];
  return output_1 > output_2 ? 1 : 0;
};

const visualize = (x, y) => {
  console.log(x);
  console.log(y);
  const cla = classify(x, y);
  if (cla == 1) {
    ctx.fillStyle = "#92383e";
    ctx.fillRect(x, y, 10, 10);
  } else {
    ctx.fillStyle = "#1e3246";
    ctx.fillRect(x, y, 10, 10);
  }
};

ctx.fillRect(0, 0, canvas.width, canvas.height);
Papa.parse(data, {
  complete: function (results) {
    console.log("Finished:", results.data);

    let max_dia = 0;
    let max_stem = 0;
    for (let i = 1; i < results.data.length; i++) {
      if (max_dia < results.data[i][0] * 1) {
        max_dia = results.data[i][0] * 1;
      }
      if (max_stem < results.data[i][5] * 1) {
        max_stem = results.data[i][5] * 1;
      }

      if (results.data[i][8] * 1 == 1) {
        ctx.fillStyle = "red";
      } else {
        ctx.fillStyle = "blue";
      }
      ctx.fillRect(
        (results.data[i][0] * 1) / 2,
        (results.data[i][5] * 1) / 2,
        10,
        10
      );
    }
  },
});
class Node {}

class layers {}
