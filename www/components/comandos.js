window.onload = function(){
    document.querySelector("#scan").addEventListener('click', function(){

        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if(result.text == '280720550'){
                    document.getElementById("Imagem").src = "imgs/Imagem1.jpg";
                    document.querySelector('#information').innerHTML = "<h1>Nome do Produto: iPad Mini Wi-Fi 64Gb -Cinza Espacia</h1><br> <p>Valor: R$ 3.499,00 </  p><p>Descrição:Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integradoSistema operacional iOS </p><p>Tamanho da tela 7.9 Tecnologia Wi-Fi</p> <p>Resolução da câmera -Câmera traseira: 8MP; -Câmera frontal: 7MPGPS SimGrava vídeos SimCâmera traseira SimCâmera frontal SimMemória Flash 64 GB </p> <p>Funciona como celular: Não</p>";
                }
               else if (result.text == '989895555'){
                    document.getElementById("Imagem").src = "imgs/Imagem2.jpg";
                    document.querySelector('#information').innerHTML = "<h1>Nome do Produto: Samsung Galaxy J8 Dual Chip 4g 64gb Tela 6</h1> <br><p>Valor:R$ 1.888,00Velocidade do Processador: 1.8GHzTipo de Processador: OctaCoreTamanho </p>(Tela Principal): 153.6mm (6.0)Resolução <p>(Tela Principal):1480 x 720 (HD+)CâmeraResolução -Câmera Traseira: 16.0 MP + 5.0 MP </p><p>Memória RAM(GB): 4 GBMemória Total Interna (GB) -64 GB*Memória Disponível (GB)  -50.6 GB</p>";
                }
              else if(result.text == '85236987'){
                    document.getElementById("Imagem").src = "imgs/Imagem3.jpg";
                    document.querySelector('#information').innerHTML = "<h1>Produto:Motorola One XT1941 Branco 64GB</h1><br> <br> <p>Valor: Sistema Operacional Android 8.1 OreoProcessador Qualcomm Snapdragon 625 (MSM8953) Octa-Core de 2.0 GHzRAM 4GB</p><p>Tecnologia GSM, 3G e 4GMemória interna 64 GB Total sendo uma parte usada para o sistema operacional e aplicativos pré-instaladosCor Branco</p><h3>Características Gerais<h3><p>Tela Max Vision e design ao máximo-Câmera dupla e armazenamento ilimitado </p><p>Android One: primeiro do Brasil, atualizado e seguro-Carregamento ultrarrápido TurboPower-Últimas inovações do Google incorporadas-Leitor Biométrico (Impressão Digital)</p>";
                }
              else if(result.text == '85369877444'){
                    document.getElementById("Imagem").src = "imgs/Imagem4.jpg";
                    document.querySelector('#information').innerHTML = "<h1>Produto:Asus Zenfone Max Pro M1</h1><br> <p>Processador: Qualcomm Snapdragon SDM636 1,8 GHz, 2 Mb Cache</p><p>Sistema Operacional: Android 8.1 </p><p>OreoMemória Ram: 4</p><p> GbMemória Interna: 64 Gb </p><p>Memória Expansiva: 2TB Sd Tela: 6,0 Led Backlight Ips panel (1080x2160)</p><p>Tipo de Chip: Nano -Dual Chip: Sim </p><p>Conectividade: 3G; 4G; Wi-fiCâmera Frontal: 8MPCâmera Traseira: 16+5MP</p>";
                }

             else {
                    
                    document.querySelector('#information').innerHTML = "<h1>Produto não encontrado<h1>";

            }
            },
            function (error) {
                alert("Scanning failed: " + error);
            },
            {
                preferFrontCamera : false, // iOS and Android
                showFlipCameraButton : true, // iOS and Android
                showTorchButton : true, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                saveHistory: true, // Android, save scan history (default false)
                prompt : "Place a barcode inside the scan area", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats : "CODE_39", // default: all but PDF_417 and RSS_EXPANDED
                orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations : true, // iOS
                disableSuccessBeep: false // iOS and Android
            }
        );
    });
}




