import React from 'react';
import Helmet from 'react-helmet';

export function HeadScripts() {
  return (
    <Helmet>
      {/* yaMetrika: uncomment for testing in development. In production use plugin
      <script>{`
        (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter = new Ya.Metrika2({ id:47364889, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2");
      `}</script>
      <noscript>{`
        <div><img src="https://mc.yandex.ru/watch/47364889" style="position:absolute; left:-9999px;" alt="" /></div>
      `}</noscript>
      */}
      {/*  Google AdWords Code */}
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <script>{`
        (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: 'ca-pub-9736896383179579',
          enable_page_level_ads: true
        });
      `}</script>
      {/*  end Google AdWords Code */}
      <script>{`
        !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?160",t.onload=function(){VK.Retargeting.Init("VK-RTRG-312457-9ETr"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
      `}</script>
      <noscript>{`
        <img src="https://vk.com/rtrg?p=VK-RTRG-312457-9ETr" style="position:fixed;left:-999px;" alt=""/>
      `}</noscript>
      {/*<script>{`
        (function(d, w, c) {
          w.ChatraID = 'szK8K2NL8SAhofLgJ';
          var s = d.createElement('script');
          w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
          };
          s.async = true;
          s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
          + '//call.chatra.io/chatra.js';
          if (d.head) d.head.appendChild(s);
        })(document, window, 'Chatra');
      `}</script>*/}
    </Helmet>
  );
}
