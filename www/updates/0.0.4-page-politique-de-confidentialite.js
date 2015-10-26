var keystone = require('keystone');
var async = require('async');

var Page = keystone.list('Page');
var Media = keystone.list('Media');

module.exports = function(done) {
	async.series([
		function(next) {
			new Page.model({"contentType":"Markdown","createdAt":"2015-10-25T22:54:41.000Z","published":true,"publishedAt":"2015-10-25T22:54:45.000Z","showInNavBar":false,"slug":"politique-de-confidentialite","sortOrder":4,"title":"Politique De Confidentialité","markdown":{"html":"<h1 id=\"politique-de-confidentialit-\">Politique de confidentialité</h1>\n<h2 id=\"qu-est-ce-que-franceconnect-\">Qu&#39;est-ce que FranceConnect ?</h2>\n<p>FranceConnect est un service du Secrétariat Général pour la Modernisation de l&#39;Action Publique (SGMAP), placé sous l’autorité du Premier ministre et piloté par la DISIC.</p>\n<p>FranceConnect permet de vous authentifier sur des services tiers - comme Cocorico - en utilisant vos identifiants des différentes administrations françaises (impôts, sécurité sociale...) sans jamais les divulguer. Ainsi, FranceConnect fourni une sorte de passeport/carte d&#39;identité numérique qui vous est unique.</p>\n<p>Grâce à FranceConnect, Cocorico guarantit que chaque utilisateur est un citoyen français et que chaque vote/contribution est donc fiable.</p>\n<h2 id=\"quelles-sont-les-donn-es-personnelles-r-cup-r-es-par-cocorico-\">Quelles sont les données personnelles récupérées par Cocorico ?</h2>\n<p>Si vous ne vous connectez pas, aucune donnée personnelle n&#39;est récupérée.</p>\n<p>Lorsque vous vous connectez à Cocorico, nous récupérons certaines informations fournies par votre &quot;carte d&#39;identité numérique&quot; FranceConnect :</p>\n<ul>\n<li>un identifiant unique,</li>\n<li>vos nom et prénom,</li>\n<li>votre sexe,</li>\n<li>votre date de naissance.</li>\n</ul>\n<h2 id=\"comment-sont-utilis-es-ces-donn-es-personnelles-quelles-donn-es-sont-enregistr-es-\">Comment sont utilisées ces données personnelles ? Quelles données sont enregistrées ?</h2>\n<p>Vos nom et prénom sont utilisés pour personnaliser l&#39;interface graphique de Cocorico : ils ne sont <strong><em>jamais</em></strong> enregistrés.</p>\n<p>Votre date de naissance et votre sexe sont enregistrés <em>anonymement</em> dans chacune de vos contributions pour restituer des statistiques de participation <em>anonymes</em> (ex: 32% des hommes de 18-24 ans ont voté &quot;pour&quot;). Pour plus d&#39;anonymat, votre date de naissance n&#39;est d&#39;ailleurs jamais enregistrée telle quelle : à la place nous enregistrons votre âge au moment de votre contribution.</p>\n<p>Votre identifiant unique est utilisé pour savoir quelle contribution vous appartient mais il n&#39;est jamais enregistré pour que vos contributions restent anonymes.</p>\n<p>Si vous ne contribuez pas, aucune de ces données n&#39;est enregistrée. Même si vous vous connectez.</p>\n<h2 id=\"comment-mon-anonymat-est-il-garantit-\">Comment mon anonymat est-il garantit ?</h2>\n<p>Tout d&#39;abord vos nom, prénom et date de naissance ne sont <em><strong>jamais</strong></em> enregistrés.</p>\n<p>Seul votre identifiant unique est utilisé pour identifier vos contributions. Mais nous ne stockons <em><strong>jamais</strong></em> votre identifiant unique. En effet, même si ce dernier ne permet pas de vous identifier directement, il pourrait être utilisé pour créer des profils et désanonymiser les données de Cocorico. Votre identifiant est donc chiffré avant d&#39;être enregistré.</p>\n<p>Nous utilisons une technique de chiffrement dite &quot;asymétrique&quot; : lorsque vous contribuez, votre contribution est identifiée par une clef unique chiffrée générée à partir de votre identifiant unique et de valeurs aléatoires. Le chiffrage asymétrique signifie que :</p>\n<ul>\n<li>à partir de votre identifiant, on peut savoir si une contribution donnée vous est attribuée,</li>\n<li>mais pour une contribution donnée, il est impossible de savoir quel identifiant et donc quel utilisateur en est l&#39;auteur.</li>\n</ul>\n<p>Cet identifiant unique est renvoyé par FranceConnect lorsque vous vous connectez : il n&#39;est jamais stocké sur nos serveurs  mais seulement dans un &quot;cookie&quot; dans votre navigateur Web.</p>\n<p><em>Il est donc impossible de savoir à qui appartient une contribution</em> : vous êtes la seule personne capable de consulter le contenu vous concernant, et ce uniquement lorsque vous êtes authentifié sur le site.</p>\n<h2 id=\"o-sont-stock-es-les-donn-es-de-cocorico-\">Où sont stockées les données de Cocorico ?</h2>\n<p>Elles sont stockées sur le territoire français, chez un hébergeur français soumis au droit français.</p>\n<h2 id=\"comment-ces-donn-es-sont-elles-s-curis-es-\">Comment ces données sont-elles sécurisées ?</h2>\n<p>Par sécurité, aucune donnée personnelle nominative n&#39;est enregistrée sur nos serveurs. Si notre base de donnée venait à être &quot;dérobée&quot;, elle ne fournirait donc rien d&#39;autre que des statistiques anonymes.</p>\n<p>La plateforme Cocorico est accessible uniquement avec une connexion chiffrée HTTPS, garantissant ainsi la sécurité des données entre votre navigateur et nos serveurs.</p>\n<p>Enfin, tout le code informatique de Cocorico est ouvert et libre : tous les développeurs sont donc en mesure d&#39;en perfectionner le fonctionnement et la sécurité.</p>\n<h2 id=\"qui-d-veloppe-cocorico-\">Qui développe Cocorico ?</h2>\n<p>Cocorico est un projet communautaire : tout le code est ouvert et libre, et tout le monde peut contribuer.</p>\n","md":"# Politique de confidentialité\r\n\r\n## Qu'est-ce que FranceConnect ?\r\n\r\nFranceConnect est un service du Secrétariat Général pour la Modernisation de l'Action Publique (SGMAP), placé sous l’autorité du Premier ministre et piloté par la DISIC.\r\n\r\nFranceConnect permet de vous authentifier sur des services tiers - comme Cocorico - en utilisant vos identifiants des différentes administrations françaises (impôts, sécurité sociale...) sans jamais les divulguer. Ainsi, FranceConnect fourni une sorte de passeport/carte d'identité numérique qui vous est unique.\r\n\r\nGrâce à FranceConnect, Cocorico guarantit que chaque utilisateur est un citoyen français et que chaque vote/contribution est donc fiable.\r\n\r\n## Quelles sont les données personnelles récupérées par Cocorico ?\r\n\r\nSi vous ne vous connectez pas, aucune donnée personnelle n'est récupérée.\r\n\r\nLorsque vous vous connectez à Cocorico, nous récupérons certaines informations fournies par votre \"carte d'identité numérique\" FranceConnect :\r\n- un identifiant unique,\r\n- vos nom et prénom,\r\n- votre sexe,\r\n- votre date de naissance.\r\n\r\n## Comment sont utilisées ces données personnelles ? Quelles données sont enregistrées ?\r\n\r\nVos nom et prénom sont utilisés pour personnaliser l'interface graphique de Cocorico : ils ne sont **_jamais_** enregistrés.\r\n\r\nVotre date de naissance et votre sexe sont enregistrés _anonymement_ dans chacune de vos contributions pour restituer des statistiques de participation _anonymes_ (ex: 32% des hommes de 18-24 ans ont voté \"pour\"). Pour plus d'anonymat, votre date de naissance n'est d'ailleurs jamais enregistrée telle quelle : à la place nous enregistrons votre âge au moment de votre contribution.\r\n\r\nVotre identifiant unique est utilisé pour savoir quelle contribution vous appartient mais il n'est jamais enregistré pour que vos contributions restent anonymes.\r\n\r\nSi vous ne contribuez pas, aucune de ces données n'est enregistrée. Même si vous vous connectez.\r\n\r\n## Comment mon anonymat est-il garantit ?\r\n\r\nTout d'abord vos nom, prénom et date de naissance ne sont _**jamais**_ enregistrés.\r\n\r\nSeul votre identifiant unique est utilisé pour identifier vos contributions. Mais nous ne stockons _**jamais**_ votre identifiant unique. En effet, même si ce dernier ne permet pas de vous identifier directement, il pourrait être utilisé pour créer des profils et désanonymiser les données de Cocorico. Votre identifiant est donc chiffré avant d'être enregistré.\r\n\r\nNous utilisons une technique de chiffrement dite \"asymétrique\" : lorsque vous contribuez, votre contribution est identifiée par une clef unique chiffrée générée à partir de votre identifiant unique et de valeurs aléatoires. Le chiffrage asymétrique signifie que :\r\n- à partir de votre identifiant, on peut savoir si une contribution donnée vous est attribuée,\r\n- mais pour une contribution donnée, il est impossible de savoir quel identifiant et donc quel utilisateur en est l'auteur.\r\n\r\nCet identifiant unique est renvoyé par FranceConnect lorsque vous vous connectez : il n'est jamais stocké sur nos serveurs  mais seulement dans un \"cookie\" dans votre navigateur Web.\r\n\r\n_Il est donc impossible de savoir à qui appartient une contribution_ : vous êtes la seule personne capable de consulter le contenu vous concernant, et ce uniquement lorsque vous êtes authentifié sur le site.\r\n\r\n## Où sont stockées les données de Cocorico ?\r\n\r\nElles sont stockées sur le territoire français, chez un hébergeur français soumis au droit français.\r\n\r\n## Comment ces données sont-elles sécurisées ?\r\n\r\nPar sécurité, aucune donnée personnelle nominative n'est enregistrée sur nos serveurs. Si notre base de donnée venait à être \"dérobée\", elle ne fournirait donc rien d'autre que des statistiques anonymes.\r\n\r\nLa plateforme Cocorico est accessible uniquement avec une connexion chiffrée HTTPS, garantissant ainsi la sécurité des données entre votre navigateur et nos serveurs.\r\n\r\nEnfin, tout le code informatique de Cocorico est ouvert et libre : tous les développeurs sont donc en mesure d'en perfectionner le fonctionnement et la sécurité.\r\n\r\n## Qui développe Cocorico ?\r\n\r\nCocorico est un projet communautaire : tout le code est ouvert et libre, et tout le monde peut contribuer."}}).save(next);
		},
		function(next) { done(); }
	]);
};