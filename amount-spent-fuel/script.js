document.getElementById('calc').addEventListener('click', () => {
  const priceEl = document.getElementById('price');
  const consumoEl = document.getElementById('consumo');
  const distEl = document.getElementById('dist');
  const pedagioEl = document.getElementById('pedagio');

  const priceErr = document.getElementById('price-error');
  const consumoErr = document.getElementById('consumo-error');
  const distErr = document.getElementById('dist-error');
  const pedagioErr = document.getElementById('pedagio-error');

  // limpar erros anteriores
  [priceErr, consumoErr, distErr, pedagioErr].forEach(el => el.textContent = '');
  [priceEl, consumoEl, distEl, pedagioEl].forEach(el => el.classList.remove('is-invalid'));

  const priceRaw = priceEl.value.trim();
  const consumoRaw = consumoEl.value.trim();
  const distRaw = distEl.value.trim();
  const pedagioRaw = pedagioEl.value.trim();

  let hasError = false;

  // Validação: campos obrigatórios
  if (!priceRaw) {
    priceErr.textContent = 'Campo obrigatório';
    priceEl.classList.add('is-invalid');
    hasError = true;
  }
  if (!consumoRaw) {
    consumoErr.textContent = 'Campo obrigatório';
    consumoEl.classList.add('is-invalid');
    hasError = true;
  }
  if (!distRaw) {
    distErr.textContent = 'Campo obrigatório';
    distEl.classList.add('is-invalid');
    hasError = true;
  }

  if (hasError) return;

  const price = parseFloat(priceRaw);
  const consumo = parseFloat(consumoRaw);
  const dist = parseFloat(distRaw);
  const pedagio = pedagioRaw ? parseFloat(pedagioRaw) : 0;

  // Evitar divisão por zero ou consumo inválido
  if (consumo <= 0) {
    consumoErr.textContent = 'O consumo deve ser maior que zero';
    consumoEl.classList.add('is-invalid');
    return;
  }
  if (dist < 0) {
    distErr.textContent = 'A distância deve ser maior que zero';
    distEl.classList.add('is-invalid');
    return;
  }

  const litros = dist / consumo;
  const custo = (litros * price) + pedagio;

  document.getElementById('litros').textContent = litros.toFixed(2);
  document.getElementById('custo').textContent = custo.toFixed(2);
});
