const stepsContent = {
  1: {
    title: "Quote",
    desc: "Tradesperson agrees a quote with the customer upfront and uploads the quote to the platform.",
    bullets: [
      "Tradesperson agrees a quote with the customer upfront.",
      "Tradesperson uploads quote to Lorem and sends it to the customer."
    ],
    index: "01"
  },
  2: {
    title: "Pay Fee",
    desc: "Customer pays the fee (escrow) so the tradesperson can confirm the job and start work.",
    bullets: [
      "Customer pays the agreed fee into escrow.",
      "Platform confirms payment and notifies the tradesperson to start work."
    ],
    index: "02"
  },
  3: {
    title: "Complete Work",
    desc: "Tradesperson completes the job and marks it as done for inspection.",
    bullets: [
      "Tradesperson completes the job to agreed specs.",
      "Tradesperson marks task complete and requests inspection/release."
    ],
    index: "03"
  },
  4: {
    title: "Rate",
    desc: "Customer rates the standard of the job and a rating process is recorded.",
    bullets: [
      "Customer rates the standard of the job.",
      "A full rating process is completed as per the terms of Lorem."
    ],
    index: "04"
  },
  5: {
    title: "Release Funds",
    desc: "After acceptance, the held funds are released to the tradesperson.",
    bullets: [
      "Customer accepts the job or dispute process completes.",
      "Escrow funds are released to the tradesperson."
    ],
    index: "05"
  }
};

const stepEls = document.querySelectorAll('.step');
const titleEl = document.getElementById('content-title');
const descEl = document.getElementById('content-desc');
const listEl = document.getElementById('content-list');
const bigIndex = document.querySelector('.step-index');

function setActive(stepNum) {
  stepNum = String(stepNum);
  if (!stepsContent[stepNum]) return;

  stepEls.forEach(s => {
    if (s.dataset.step === stepNum) {
      s.classList.add('active');
      s.setAttribute('aria-current','step');
    } else {
      s.classList.remove('active');
      s.removeAttribute('aria-current');
    }
  });

  const data = stepsContent[stepNum];
  titleEl.textContent = data.title;
  descEl.textContent = data.desc;

  listEl.innerHTML = '';
  data.bullets.forEach(b => {
    const li = document.createElement('li');
    li.innerHTML = '<span class="bullet-mark">✶</span><span>' + b + '</span>';
    listEl.appendChild(li);
  });

  bigIndex.textContent = data.index;
}

stepEls.forEach(s => {
  s.addEventListener('click', () => setActive(s.dataset.step));
  s.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActive(s.dataset.step);
    }
  });
});

setActive('1');
