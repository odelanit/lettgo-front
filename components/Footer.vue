<template>
    <footer>
        <div class="subscription-footer">
            <div class="container">
                <div class="flex-wrap">
                    <div class="flex-left flex-wrap">
                        <i class="aficon-paper-plane"></i>
                        <div class="subscribe-title">
                            <h4>Abonner på vårt nyhetsbrev</h4>
                            <p>Få de ferskeste nyhetene direkte i din e-post innboks</p>
                        </div>
                    </div>
                    <div class="flex-right">
                        <form class="ajax-form" autocomplete="off"><input type="hidden" value="1" name="aff-cpt">
                            <div class="adifier-form">
                                <input type="text" name="email" placeholder="Din e-post adresse">
                                <a href="javascript:void(0)" class="submit-ajax-form">Abonner</a>
                            </div>
                            <input type="hidden" name="action" value="subscribe">
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-sidebar-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="widget white-block clearfix widget_text">
                            <div class="white-block-title"><h5>Kundeservice</h5></div>
                            <div class="textwidget">
                                <ul class="menu">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/ledigstilling/">Ledig stillinger</a></li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/presse/">presse</a></li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/kontakt-oss/">Kontakt oss</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="widget white-block clearfix widget_nav_menu">
                            <div class="white-block-title"><h5>Hurtiglenker</h5></div>
                            <div class="menu-footer-menu-container">
                                <ul class="menu">
                                    <li
                                        class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/faq/">Ofte stilte spørsmål</a></li>
                                    <li id="menu-item-1748"
                                        class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/how-it-works/">Hvordan det fungerer</a></li>
                                    <li id="menu-item-2800"
                                        class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/betingelser-vilkar-for-annonsering/">Regler
                                            for annonsering</a></li>
                                    <li id="menu-item-2825"
                                        class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/unnga-a-bli-svindlet/">Unngå å bli
                                            svindlet</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="widget white-block clearfix widget_text">
                            <div class="white-block-title"><h5>GDPR-Senter</h5></div>
                            <div class="textwidget">
                                <ul class="menu">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/personvern/">Personvernerklæring</a></li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/betingelser/">Betingelser &amp; vilkår</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/cookies/">Cookies</a></li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://www.lettgo.no/gdpr/">Endre innstillinger</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyrights">
            <div class="container">
                <div class="flex-wrap">
                    <div class="flex-left">
                        Lettgo <i class="fa fa-heart"></i> Norsk markedsplass
                    </div>
                    <div class="flex-center">
                        <ul class="list-unstyled list-inline social-links">

                            <li>
                                <a href="#" target="_blank">
                                    <i class="aficon-facebook"></i>
                                </a>
                            </li>


                            <li>
                                <a href="#" target="_blank">
                                    <i class="aficon-twitter"></i>
                                </a>
                            </li>


                            <li>
                                <a href="#" target="_blank">
                                    <i class="aficon-instagram"></i>
                                </a>
                            </li>


                            <li>
                                <a href="#" target="_blank">
                                    <i class="aficon-youtube"></i>
                                </a>
                            </li>


                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

</style>
