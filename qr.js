
$('#formSel').change( function() {
    var id = $(this).val();
    if( id != '-' )
    {
        document.getElementById("form").style.display="flex";
        $('form').hide();
        $('#form'+id).show();
    }else{
        document.getElementById("form").style.display="none";
    }
});

function makeCode () {
    var ch= document.getElementById('formSel').value;
    if(ch=="1"){
        var qrcode = new QRCode("qrcode",{
            colorDark:document.getElementById('favcolor').value,
            colorLight:document.getElementById('favcolor2').value,
        });
        var elText = document.getElementById("url");
        
        if (!elText.value) {
            alert("Input an URL");
            document.getElementById('qrcode').innerHTML="";
            elText.focus();
            return;
        }
        console.log(document.querySelectorAll('#qrcode img').length);
        if(document.querySelectorAll('#qrcode img').length==1){
            qrcode.makeCode(elText.value);
        }else{
            document.getElementById('qrcode').innerHTML="";
            qrcode.clear();
            makeCode();
        }
    }
    if(ch=="2"){
        var qrcode = new QRCode("qrcode",{
            colorDark:document.getElementById('favcolor').value,
            colorLight:document.getElementById('favcolor2').value,
        });
        var wifi_name = document.getElementById("wifi_name").value;
        var wifi_pass = document.getElementById("wifi_pass").value;
        var details = "Wifi Name = "+wifi_name+"\n"+"Wifi Password = "+wifi_pass;
        if (!wifi_name) {
            alert("Input details");
            wifi_name.focus();
            document.getElementById('qrcode').innerHTML="";
            return;
        }
        if(!wifi_pass){
            alert("Input details");
            wifi_pass.focus();
            document.getElementById('qrcode').innerHTML="";
            return;
        }
        console.log(document.querySelectorAll('#qrcode img').length);
        if(document.querySelectorAll('#qrcode img').length==1){
            qrcode.makeCode(details);
        }else{
            document.getElementById('qrcode').innerHTML="";
            qrcode.clear();
            makeCode();
        }
        
    }
	
}
document.getElementById("getbutton").addEventListener("click", makeCode);
