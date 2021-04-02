<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>

<script>
function showMailingPopUp() {
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us7.list-manage.com","uuid":"5e1241882b487ff71ec0541ec","lid":"eea2de931d"}) })
    document.cookie = “MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC”;
};

document.getElementById("open-popup").onclick = function() {showMailingPopUp()};
</script>