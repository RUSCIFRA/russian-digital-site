/*! © 2026 KONTURBIZ. Калькулятор экономики программы лояльности RC CITY. Все права защищены.
   Копирование, перепубликация и использование кода без письменного разрешения правообладателя запрещены.
   Контакт: info@konturbiz.ru · метка авторства: RCK-KB-2026-7F3A */
(function () {
    'use strict';
    const _0x1000 = 'cefdae55-d675-4cae-9d54-cf354a6223bd', _0x1007 = 'https://xn--b1aladcb5ablegayu2a.xn--p1ai';
    const _0x100e = { home: _0x1007 + '/', calc: _0x1007 + '/loyalty-calculator/', tar: _0x1007 + '/tarify-rc-city/', keys: _0x1007 + '/keysy/', shop: _0x1007 + '/programma-loyalnosti-dlya-magazina/', cafe: _0x1007 + '/programma-loyalnosti-dlya-kofeen-i-kafe/', salon: _0x1007 + '/programma-loyalnosti-dlya-salona-krasoty/', build: _0x1007 + '/programma-loyalnosti-dlya-stroymaterialov/', par: _0x1007 + '/partnerstvo/', team: _0x1007 + '/o-partnere/', cases: _0x1007 + '/assets/docs/rc-city-cases.pdf', instr: _0x1007 + '/assets/docs/instrukciya-kalkulyatora-rc-city.pdf', connect: 'https://konturbiz.ru/pages/services/loyalty.html', scan: 'https://konturbiz.ru/pages/diagnostics/konturscan.html', kb: 'https://konturbiz.ru/', max: 'https://max.ru/u/f9LHodD0cOK9j1Kr6UZIS_UpBEObbNj3xYCXdviZWiObDQvOsHffp3Gc1kM' };
    const _0x1015 = _0x101c => document.getElementById(_0x101c);
    const _0x1023 = _0x102a => Number.isFinite(_0x102a) ? Math.round(_0x102a).toLocaleString('ru-RU').replace('-', '−') + ' ₽' : '—';
    const _0x1031 = _0x1038 => (_0x1038 > 0 ? '+' : '') + _0x1023(_0x1038);
    const _0x103f = _0x1046 => (Math.round(_0x1046 * 10) / 10).toString().replace('.', ',');
    const _0x104d = _0x1054 => Math.abs(_0x1054) >= 1000 ? (Math.round(_0x1054 / 100) / 10).toString().replace('.', ',') + ' тыс' : String(Math.round(_0x1054));
    const _0x105b = (_0x1062, _0x1069, _0x1070) => `<a data-url="${_0x1062}" class="${_0x1070 || 'rp-link'}">${_0x1069}</a>`;
    function _0x1077(_0x107e) { const _0x1085 = _0x1015(_0x107e); if (!_0x1085)
        return; _0x1085.hidden = false; _0x1085.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
    function _0x108c(_0x1093) { _0x1093.hidden = true; _0x1093.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
    document.addEventListener('click', _0x109a => { const _0x10a1 = _0x109a.target.closest && _0x109a.target.closest('[data-close-modal]'); if (_0x10a1) {
        _0x108c(_0x10a1.closest('.rd-modal'));
    }
    else if (_0x109a.target.classList && _0x109a.target.classList.contains('rd-modal'))
        _0x108c(_0x109a.target); });
    document.addEventListener('keydown', _0x10a8 => { if (_0x10a8.key === 'Escape')
        document.querySelectorAll('.rd-modal:not([hidden])').forEach(_0x108c); });
    async function _0x10af(_0x10b6) { try {
        const _0x10bd = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(Object.assign({ access_key: _0x1000 }, _0x10b6)) });
        const _0x10c4 = await _0x10bd.json().catch(() => ({}));
        return _0x10bd.ok && _0x10c4.success;
    }
    catch (_0x10cb) {
        return false;
    } }
    const _0x10d2 = _0x1015('calc-lead-form');
    if (_0x10d2)
        _0x10d2.addEventListener('submit', async (_0x10d9) => {
            _0x10d9.preventDefault();
            const _0x10e0 = _0x10d2.querySelector('[type=submit]'), _0x10e7 = _0x10e0.textContent;
            _0x10e0.disabled = true;
            _0x10e0.textContent = 'Отправка…';
            const _0x10ee = await _0x10af({ subject: 'Вопрос из калькулятора — русскийцифровой.рф', from_name: 'русскийцифровой.рф', name: _0x1015('leadName').value.trim(), contact: _0x1015('leadContact').value.trim(), message: _0x1015('leadMsg').value.trim(), source: location.href, calc_preview: ((_0x1015('out') || {}).innerText || '').slice(0, 1500) });
            _0x10e0.disabled = false;
            _0x10e0.textContent = _0x10e7;
            alert(_0x10ee ? 'Заявка отправлена. Мы свяжемся с вами.' : 'Не удалось отправить. Напишите на rcbiz@konturbiz.ru');
            if (_0x10ee) {
                _0x10d2.reset();
                _0x108c(_0x1015('leadModal'));
            }
        });
    function _0x10f5(_0x10fc) {
        const _0x1103 = _0x10fc.v, _0x110a = _0x10fc.y, _0x1111 = _0x1103.accrual * .5, _0x1118 = _0x1111 + _0x1103.disc, _0x111f = Math.min(30, _0x1103.kc * _0x1118), _0x1126 = Math.min(40, _0x1103.kf * _0x1118), _0x112d = ((1 + _0x111f / 100) * (1 + _0x1126 / 100) - 1) * 100;
        const _0x1134 = _0x1103.check * (1 + _0x111f / 100), _0x113b = _0x1103.freq * (1 + _0x1126 / 100), _0x1142 = _0x1149 => _0x1149 ? 'включены' : 'не включены';
        const _0x1150 = _0x10fc.yearOk ? `По вашим параметрам программа даёт ${_0x1031(_0x110a.cum)} за 12 месяцев при затратах ${_0x1023(_0x10fc.costYear)}; ROI ${Math.round(_0x10fc.roi)}%, окупаемость — ${_0x10fc.payback}.` : `По текущим параметрам программа пока не окупается (${_0x1031(_0x110a.cum)} за 12 месяцев). Снизьте процент начисления, замените welcome-баллы подарком или поднимите долю оцифрованных клиентов.`;
        return { gc: _0x111f, gf: _0x1126, f: _0x112d, eff: _0x1118, own: _0x1111, chk2: _0x1134, fr2: _0x113b, cards: [
                { h: 'Почему растёт средний чек', p: `Баллы превращают скидку в накопительную выгоду: клиент видит, что докупив товар, он получит больше баллов и потратит их у вас. В вашем расчёте эффективная выгода клиента — ${_0x103f(_0x1118)}% (половина начисления ${_0x103f(_0x1103.accrual)}% плюс скидка ${_0x103f(_0x1103.disc)}%). Модель оценивает рост среднего чека на ${_0x103f(_0x111f)}%: с ${_0x1023(_0x1103.check)} до ${_0x1023(_0x1134)}.`,
                    ul: ['Баллы 1 = 1 ₽: клиент видит конкретную сумму, которую можно потратить.', `Группы начисления: порог выше привычного чека подталкивает докупить «до бонуса» (в расчёте ${_0x1142(_0x1103.tierEnabled)}).`, 'Приветственные баллы и подарок снижают барьер первой покупки.', `Предзаказы и электронное меню — отдельный канал продаж (в расчёте ${_0x1142(_0x1103.preorderEnabled)}).`, 'Рост чека ограничен потолком +30%: это допущение модели, а не гарантия.'] },
                { h: 'Почему растёт частота визитов', p: `Накопленные баллы — повод вернуться именно к вам, а не к конкуренту: пока баллы не потрачены, у клиента есть причина прийти снова. Модель оценивает рост частоты покупок на ${_0x103f(_0x1126)}%: с ${_0x103f(_0x1103.freq)} до ${_0x103f(_0x113b)} покупок в месяц у одного клиента.`,
                    ul: ['Баллы ждут на балансе и напоминают о себе в приложении RC PAY.', `Push-уведомления на карту Wallet (тариф «Промо») возвращают давно не приходивших (RFM и push в расчёте ${_0x1142(_0x1103.rfmEnabled)}).`, 'Клиенты других партнёров экосистемы приходят потратить баллы у вас — это дополнительные визиты.', `Акции с повышенным начислением дают повод зайти (в расчёте ${_0x1142(_0x1103.promoEnabled)}).`, 'Рост частоты ограничен потолком +40%.'] },
                { h: 'Почему подключать программу выгодно', p: _0x1150,
                    ul: [`Баллы стоят денег, только когда клиент их тратит: по модели списывается ${_0x103f(_0x1103.redeem)}% начисленного.`, `Внутренний клиент получает ${_0x103f(_0x1111)}% с покупки, остальные ${_0x103f(_0x1111)}% остаются у вас (сценарий 50/50).`, 'Вход от 0 ₽: тариф «Лайт» бесплатный; «Промо» (18 000 ₽ в год) открывает оцифровку, push и группы начисления.', 'Часть клиентов приходит из экосистемы RC PAY: по данным компании в сети свыше 20 тыс. торговых точек и 830 тыс. клиентов.', 'Оцифровка превращает случайных покупателей в базу, с которой можно работать.'] }
            ] };
    }
    const _0x1157 = _0x115e => '<div class="why">' + _0x10f5(_0x115e).cards.map(_0x1165 => `<div><h4>${_0x1165.h}</h4><p>${_0x1165.p}</p><ul>${_0x1165.ul.map(_0x116c => `<li>${_0x116c}</li>`).join('')}</ul></div>`).join('') + '</div>';
    const _0x1173 = _0x1015('out');
    const _0x117a = new MutationObserver(() => {
        if (!_0x1173.querySelector('.verdict') || _0x1173.querySelector('.rd-actions') || !window.lastCalc)
            return;
        _0x117a.disconnect();
        _0x1173.insertAdjacentHTML('beforeend', _0x1157(window.lastCalc) + `<div class="rd-actions"><button type="button" class="rd-btn rd-btn--primary" id="pdfBtn">Скачать PDF-отчёт</button><a class="rd-btn rd-btn--primary" href="https://konturbiz.ru/pages/services/loyalty.html" target="_blank" rel="noopener noreferrer">Подключить RC CITY →</a><button type="button" class="rd-btn" id="askBtn">Получить разбор экономики</button><a class="rd-btn" href="../assets/docs/rc-city-cases.pdf" download>Успешные кейсы RC CITY (PDF) ↓</a></div><p class="dl-note">В PDF: титульный лист, графики, сценарии, исходные данные, пояснения и ссылки на <a href="../index.html">русскийцифровой.рф</a>. Это расчёт по допущениям модели, а не гарантия результата; значения по сферам — типовые допущения, замените их своими.</p>`);
        _0x1015('pdfBtn').addEventListener('click', _0x1181);
        _0x1015('askBtn').addEventListener('click', () => _0x1077('leadModal'));
        const _0x1188 = _0x1015('btnAskInline');
        if (_0x1188)
            _0x1188.addEventListener('click', () => _0x1077('leadModal'));
        _0x117a.observe(_0x1173, { childList: true });
    });
    if (_0x1173)
        _0x117a.observe(_0x1173, { childList: true });
    async function _0x1181() {
        const _0x118f = window.__lastReport;
        if (!_0x118f) {
            alert('Сначала нажмите «Рассчитать экономику».');
            return;
        }
        if (typeof html2canvas !== 'function' || !(window.jspdf && window.jspdf.jsPDF)) {
            alert('PDF-библиотеки не загрузились. Проверьте подключение к интернету и попробуйте ещё раз.');
            return;
        }
        const _0x1196 = _0x1015('pdfBtn'), _0x119d = _0x1196.textContent;
        _0x1196.disabled = true;
        _0x1196.textContent = 'Формируем PDF…';
        try {
            const _0x11a4 = ((document.querySelector('#chips button[aria-pressed="true"]') || {}).textContent || 'Другое').trim();
            const _0x11ab = { 0: 'Лайт', 1500: 'Промо', 3250: 'Про+' }[_0x118f.v.tariff] || '—';
            const _0x11b2 = await window.__rdReport.build(_0x11a4 + ' · тариф ' + _0x11ab);
            _0x11b2.save('RC-CITY-otchet-' + new Date().toISOString().slice(0, 10) + '.pdf');
        }
        catch (_0x11b9) {
            console.error(_0x11b9);
            alert('Не удалось сформировать PDF. Попробуйте ещё раз.\n' + ((_0x11b9 && _0x11b9.message) || _0x11b9));
        }
        finally {
            _0x1196.disabled = false;
            _0x1196.textContent = _0x119d;
        }
    }
})();


/* оповещение о запуске калькулятора на чужом домене (не блокирует работу) */
(function(){
 var ALLOW=/(^|\.)(xn--b1aladcb5ablegayu2a\.xn--p1ai|konturbiz\.ru)$/i;
 function foreign(h,proto){return !!h&&proto!=='file:'&&h!=='localhost'&&h!=='127.0.0.1'&&!ALLOW.test(h)}
 window.__rcForeign=foreign;
 try{
  if(foreign(location.hostname,location.protocol)){
   var b=new Blob([JSON.stringify({h:location.hostname,u:location.href,r:document.referrer})],{type:'text/plain'});
   if(navigator.sendBeacon)navigator.sendBeacon('https://xn--b1aladcb5ablegayu2a.xn--p1ai/api/copy-alert.php',b);
  }
 }catch(e){}
})();
