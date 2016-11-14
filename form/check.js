function shownotice(text){
    $('#notice').html("<i class='icon icon-info-sign' style='font-size: 30px'></i> "+text);
    $('#mySmModal').modal('show', 'center');
}

function toVaild() {

    xm = /^[\u4E00-\u9FA5]{2,4}$/;
    dw = /^[\u4E00-\u9FA5]{2,30}$/;
    tel=/\d{11,12}$/;
    if(!xm.test($("#xm").val())){
        shownotice('姓名填写不正确');
        return false;
    };
    if(!dw.test($("#dw").val())){
        shownotice('单位/公司填写不正确');
        return false;
    };
    if(!tel.test($("#tel").val())){
        shownotice('电话填写不正确,可以填入手机号,座机如:01089776789');
        return false;
    };
    if($('#gyc').is(':checked')==false && $('#qgc').is(':checked')==false){
        shownotice('业务方向没有选择');
        return false;
    }
    if($('#f2').val()==null){
        shownotice('业务范围没有选择');
        return false;
    }
}