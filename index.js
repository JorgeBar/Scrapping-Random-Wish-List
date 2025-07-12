const {chromium} = require('playwright')

;(async () => {
   const browser =  await chromium.launch()
   const page = await browser.newPage()
   await page.goto('https://www.amazon.es/dp/B07W6FQ659')
   await page.screenshot({path: 'Headphones.png'})
   const content = await page.textContent()
   await browser.close()
})()


/* Páginas que usaré para los auriculares

PcComponentes : 
https://www.pccomponentes.com/logitech-g535-wireless-auriculares-gaming-inalambricos-negros-para-pc-ps4-ps5

Meida Markt :
https://www.mediamarkt.es/es/product/_auriculares-gaming-logitech-g-g535-bluetooth-pc-ps4-ps5-negro-1534063.html

Logitech :
https://www.logitech.com/es-es/shop/p/g535-wireless-headset.981-000972?sp=13&searchclick=Logitech%20G

Senetic :
https://www.senetic.es/product/981-000972?srsltid=AfmBOoomTcVOXHy-X1tNhlOMeqLex6JqWN2nSIDNqjqQ0M91QL78HEsw

Castro Electrónica :
https://www.castroelectronica.pt/es/product/auscultadores-headset-gaming-g535-lightspeed-wireless-preto--logitech

Idealo. Esta compara los precios. Báiscamente hace lo que en un futuro lejano me gustaría saber hacer.Un super scraping :
https://www.idealo.es/precios/201990496/logitech-g-g535-lightspeed.html