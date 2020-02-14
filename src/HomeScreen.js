import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// IOS

const font1 = 'San Francisco'
const font2 = 'Academy Engraved LET'
const font3 = 'AcademyEngravedLetPlain'
const font4 = 'Al Nile'
const font5 = 'AlNile-Bold'
const font6 = 'American Typewriter'
const font7 = 'AmericanTypewriter-Bold'
const font8 = 'AmericanTypewriter-Condensed'
const font9 = 'AmericanTypewriter-CondensedBold'
const font10 = 'AmericanTypewriter-CondensedLight'
const font11 = 'AmericanTypewriter-Light'
const font12 = 'Apple Color Emoji'
const font13 = 'Apple SD Gothic Neo'
const font14 = 'AppleColorEmoji'
const font15 = 'AppleSDGothicNeo-Bold'
const font16 = 'AppleSDGothicNeo-Light'
const font17 = 'AppleSDGothicNeo-Medium'
const font18 = 'AppleSDGothicNeo-Regular'
const font19 = 'AppleSDGothicNeo-SemiBold'
const font20 = 'AppleSDGothicNeo-Thin'
const font21 = 'AppleSDGothicNeo-UltraLight'
const font22 = 'Arial'
const font23 = 'Arial Hebrew'
const font24 = 'Arial Rounded MT Bold'
const font25 = 'Arial-BoldItalicMT'
const font26 = 'Arial-BoldMT'
const font27 = 'Arial-ItalicMT'
const font28 = 'ArialHebrew'
const font29 = 'ArialHebrew-Bold'
const font30 = 'ArialHebrew-Light'
const font31 = 'ArialMT'
const font32 = 'ArialRoundedMTBold'
const font33 = 'Avenir'
const font34 = 'Avenir Next'
const font35 = 'Avenir Next Condensed'
const font36 = 'Avenir-Black'
const font37 = 'Avenir-BlackOblique'
const font38 = 'Avenir-Book'
const font39 = 'Avenir-BookOblique'
const font40 = 'Avenir-Heavy'
const font41 = 'Avenir-HeavyOblique'
const font42 = 'Avenir-Light'
const font43 = 'Avenir-LightOblique'
const font44 = 'Avenir-Medium'
const font45 = 'Avenir-MediumOblique'
const font46 = 'Avenir-Oblique'
const font47 = 'Avenir-Roman'
const font48 = 'AvenirNext-Bold'
const font49 = 'AvenirNext-BoldItalic'
const font50 = 'AvenirNext-DemiBold'
const font51 = 'AvenirNext-DemiBoldItalic'
const font52 = 'AvenirNext-Heavy'
const font53 = 'AvenirNext-HeavyItalic'
const font54 = 'AvenirNext-Italic'
const font55 = 'AvenirNext-Medium'
const font56 = 'AvenirNext-MediumItalic'
const font57 = 'AvenirNext-Regular'
const font58 = 'AvenirNext-UltraLight'
const font59 = 'AvenirNext-UltraLightItalic'
const font60 = 'AvenirNextCondensed-Bold'
const font61 = 'AvenirNextCondensed-BoldItalic'
const font62 = 'AvenirNextCondensed-DemiBold'
const font63 = 'AvenirNextCondensed-DemiBoldItalic'
const font64 = 'AvenirNextCondensed-Heavy'
const font65 = 'AvenirNextCondensed-HeavyItalic'
const font66 = 'AvenirNextCondensed-Italic'
const font67 = 'AvenirNextCondensed-Medium'
const font68 = 'AvenirNextCondensed-MediumItalic'
const font69 = 'AvenirNextCondensed-Regular'
const font70 = 'AvenirNextCondensed-UltraLight'
const font71 = 'AvenirNextCondensed-UltraLightItalic'
const font72 = 'Bangla Sangam MN'
const font73 = 'Baskerville'
const font74 = 'Baskerville-Bold'
const font75 = 'Baskerville-BoldItalic'
const font76 = 'Baskerville-Italic'
const font77 = 'Baskerville-SemiBold'
const font78 = 'Baskerville-SemiBoldItalic'
const font79 = 'Bodoni 72'
const font80 = 'Bodoni 72 Oldstyle'
const font81 = 'Bodoni 72 Smallcaps'
const font82 = 'Bodoni Ornaments'
const font83 = 'BodoniOrnamentsITCTT'
const font84 = 'BodoniSvtyTwoITCTT-Bold'
const font85 = 'BodoniSvtyTwoITCTT-Book'
const font86 = 'BodoniSvtyTwoITCTT-BookIt'
const font87 = 'BodoniSvtyTwoOSITCTT-Bol'
const font88 = 'BodoniSvtyTwoOSITCTT-Boo'
const font89 = 'BodoniSvtyTwoSCITCTT-Boo'
const font90 = 'Bradley Han'
const font91 = 'BradleyHandITCTT-Bol'
const font92 = 'Chalkboard S'
const font93 = 'ChalkboardSE-Bold'
const font94 = 'ChalkboardSE-Light'
const font95 = 'ChalkboardSE-Regular'
const font96 = 'Chalkduster'
const font97 = 'Cochin'
const font98 = 'Cochin-Bold'
const font99 = 'Cochin-BoldItalic'
const font100 = 'Cochin-Italic'
const font101 = 'Copperplate'
const font102 = 'Copperplate-Bold'
const font103 = 'Copperplate-Light'
const font104 = 'Courier'
const font105 = 'Courier New'
const font106 = 'Courier-Bold'
const font107 = 'Courier-BoldOblique'
const font108 = 'Courier-Oblique'
const font109 = 'CourierNewPS-BoldItalicMT'
const font110 = 'CourierNewPS-BoldMT'
const font111 = 'CourierNewPS-ItalicMT'
const font112 = 'CourierNewPSMT'
const font113 = 'Damascus'
const font114 = 'DamascusBold'
const font115 = 'DamascusLight'
const font116 = 'DamascusMedium'
const font117 = 'DamascusSemiBold'
const font118 = 'Devanagari Sangam MN'
const font119 = 'DevanagariSangamMN'
const font120 = 'DevanagariSangamMN-Bold'
const font121 = 'Didot'
const font122 = 'Didot-Bold'
const font123 = 'Didot-Italic'
const font124 = 'DiwanMishafi'
const font125 = 'Euphemia UCAS'
const font126 = 'EuphemiaUCAS-Bold'
const font127 = 'EuphemiaUCAS-Italic'
const font128 = 'Farah'
const font129 = 'Futura'
const font130 = 'Futura-CondensedExtraBold'
const font131 = 'Futura-CondensedMedium'
const font132 = 'Futura-Medium'
const font133 = 'Futura-MediumItalic'
const font134 = 'Geeza Pro'
const font135 = 'GeezaPro-Bold'
const font136 = 'Georgia'
const font137 = 'Georgia-Bold'
const font138 = 'Georgia-BoldItalic'
const font139 = 'Georgia-Italic'
const font140 = 'Gill Sans'
const font141 = 'GillSans-Bold'
const font142 = 'GillSans-BoldItalic'
const font143 = 'GillSans-Italic'
const font144 = 'GillSans-Light'
const font145 = 'GillSans-LightItalic'
const font146 = 'GillSans-SemiBold'
const font147 = 'GillSans-SemiBoldItalic'
const font148 = 'GillSans-UltraBold'
const font149 = 'Gujarati Sangam MN'
const font150 = 'GujaratiSangamMN'
const font151 = 'GujaratiSangamMN-Bold'
const font152 = 'Gurmukhi MN'
const font153 = 'GurmukhiMN-Bold'
const font154 = 'Heiti SC'
const font155 = 'Heiti TC'
const font156 = 'Helvetica'
const font157 = 'Helvetica Neue'
const font158 = 'Helvetica-Bold'
const font159 = 'Helvetica-BoldOblique'
const font160 = 'Helvetica-Light'
const font161 = 'Helvetica-LightOblique'
const font162 = 'Helvetica-Oblique'
const font163 = 'HelveticaNeue-Bold'
const font164 = 'HelveticaNeue-BoldItalic'
const font165 = 'HelveticaNeue-CondensedBlack'
const font166 = 'HelveticaNeue-CondensedBold'
const font167 = 'HelveticaNeue-Italic'
const font168 = 'HelveticaNeue-Light'
const font169 = 'HelveticaNeue-LightItalic'
const font170 = 'HelveticaNeue-Medium'
const font171 = 'HelveticaNeue-MediumItalic'
const font172 = 'HelveticaNeue-Thin'
const font173 = 'HelveticaNeue-ThinItalic'
const font174 = 'HelveticaNeue-UltraLight'
const font175 = 'HelveticaNeue-UltraLightItalic'
const font176 = 'Hiragino Mincho ProN'
const font177 = 'Hiragino Sans'
const font178 = 'HiraginoSans-W3'
const font179 = 'HiraginoSans-W6'
const font180 = 'HiraMinProN-W3'
const font181 = 'HiraMinProN-W6'
const font182 = 'Hoefler Text'
const font183 = 'HoeflerText-Black'
const font184 = 'HoeflerText-BlackItalic'
const font185 = 'HoeflerText-Italic'
const font186 = 'HoeflerText-Regular'
const font187 = 'Iowan Old Style'
const font188 = 'IowanOldStyle-Bold'
const font189 = 'IowanOldStyle-BoldItalic'
const font190 = 'IowanOldStyle-Italic'
const font191 = 'IowanOldStyle-Roman'
const font192 = 'Kailasa'
const font193 = 'Kailasa-Bold'
const font194 = 'Kannada Sangam MN'
const font195 = 'KannadaSangamMN'
const font196 = 'KannadaSangamMN-Bold'
const font197 = 'Khmer Sangam MN'
const font198 = 'Kohinoor Bangla'
const font199 = 'Kohinoor Devanagari'
const font200 = 'Kohinoor Telugu'
const font201 = 'KohinoorBangla-Light'
const font202 = 'KohinoorBangla-Regular'
const font203 = 'KohinoorBangla-Semibold'
const font204 = 'KohinoorDevanagari-Light'
const font205 = 'KohinoorDevanagari-Regular'
const font206 = 'KohinoorDevanagari-Semibold'
const font207 = 'KohinoorTelugu-Light'
const font208 = 'KohinoorTelugu-Medium'
const font209 = 'KohinoorTelugu-Regular'
const font210 = 'Lao Sangam MN'
const font211 = 'Malayalam Sangam MN'
const font212 = 'MalayalamSangamMN'
const font213 = 'MalayalamSangamMN-Bold'
const font214 = 'Marker Felt'
const font215 = 'MarkerFelt-Thin'
const font216 = 'MarkerFelt-Wide'
const font217 = 'Menlo'
const font218 = 'Menlo-Bold'
const font219 = 'Menlo-BoldItalic'
const font220 = 'Menlo-Italic'
const font221 = 'Menlo-Regular'
const font222 = 'Mishafi'
const font223 = 'Noteworthy'
const font224 = 'Noteworthy-Bold'
const font225 = 'Noteworthy-Light'
const font226 = 'Optima'
const font227 = 'Optima-Bold'
const font228 = 'Optima-BoldItalic'
const font229 = 'Optima-ExtraBlack'
const font230 = 'Optima-Italic'
const font231 = 'Optima-Regular'
const font232 = 'Oriya Sangam MN'
const font233 = 'OriyaSangamMN'
const font234 = 'OriyaSangamMN-Bold'
const font235 = 'Palatino'
const font236 = 'Palatino-Bold'
const font237 = 'Palatino-BoldItalic'
const font238 = 'Palatino-Italic'
const font239 = 'Palatino-Roman'
const font240 = 'Papyrus'
const font241 = 'Papyrus-Condensed'
const font242 = 'Party LET'
const font243 = 'PartyLetPlain'
const font244 = 'PingFang HK'
const font245 = 'PingFang SC'
const font246 = 'PingFang TC'
const font247 = 'PingFangHK-Light'
const font248 = 'PingFangHK-Medium'
const font249 = 'PingFangHK-Regular'
const font250 = 'PingFangHK-Semibold'
const font251 = 'PingFangHK-Thin'
const font252 = 'PingFangHK-Ultralight'
const font253 = 'PingFangSC-Light'
const font254 = 'PingFangSC-Medium'
const font255 = 'PingFangSC-Regular'
const font256 = 'PingFangSC-Semibold'
const font257 = 'PingFangSC-Thin'
const font258 = 'PingFangSC-Ultralight'
const font259 = 'PingFangTC-Light'
const font260 = 'PingFangTC-Medium'
const font261 = 'PingFangTC-Regular'
const font262 = 'PingFangTC-Semibold'
const font263 = 'PingFangTC-Thin'
const font264 = 'PingFangTC-Ultralight'
const font265 = 'Savoye LET'
const font266 = 'SavoyeLetPlain'
const font267 = 'Sinhala Sangam MN'
const font268 = 'SinhalaSangamMN'
const font269 = 'SinhalaSangamMN-Bold'
const font270 = 'Snell Roundhand'
const font271 = 'SnellRoundhand-Black'
const font272 = 'SnellRoundhand-Bold'
const font273 = 'Symbol'
const font274 = 'Tamil Sangam MN'
const font275 = 'TamilSangamMN-Bold'
const font276 = 'Telugu Sangam MN'
const font277 = 'Thonburi'
const font278 = 'Thonburi-Bold'
const font279 = 'Thonburi-Light'
const font280 = 'Times New Roman'
const font281 = 'TimesNewRomanPS-BoldItalicMT'
const font282 = 'TimesNewRomanPS-BoldMT'
const font283 = 'TimesNewRomanPS-ItalicMT'
const font284 = 'TimesNewRomanPSMT'
const font285 = 'Trebuchet MS'
const font286 = 'Trebuchet-BoldItalic'
const font287 = 'TrebuchetMS-Bold'
const font288 = 'TrebuchetMS-Italic'
const font289 = 'Verdana'
const font290 = 'Verdana-Bold'
const font291 = 'Verdana-BoldItalic'
const font292 = 'Verdana-Italic'
const font293 = 'Zapf Dingbats'
const font294 = 'ZapfDingbatsITC'
const font295 = 'Zapfino'

// Android

const font296 = 'normal'
const font297 = 'notoserif'
const font298 = 'sans - serif'
const font299 = 'sans - serif - light'
const font300 = 'sans - serif - thin'
const font301 = 'sans - serif - condensed'
const font302 = 'sans - serif - medium'
const font303 = 'serif'
const font304 = 'Roboto'
const font305 = 'monospace'

const HomeScreen = () => {


    return (
        <>
            <Text style={styles.Families}>
                Font Families
            </Text>

            <ScrollView style={styles.container}>

                {/* IOS */}
                <Text>Academy Engraved LET</Text>
                <Text style={styles.f2}>Academy Engraved LET</Text>
                <Text>AcademyEngravedLetPlain</Text>
                <Text style={styles.f3}>AcademyEngravedLetPlain</Text>
                <Text>Al Nile</Text>
                <Text style={styles.f4}>Al Nile</Text>
                <Text>AlNile-Bold</Text>
                <Text style={styles.f5}>AlNile-Bold</Text>
                <Text>American Typewriter</Text>
                <Text style={styles.f6}>American Typewriter</Text>
                <Text>AmericanTypewriter-Bold</Text>
                <Text style={styles.f7}>AmericanTypewriter-Bold</Text>
                <Text>AmericanTypewriter-Condensed</Text>
                <Text style={styles.f8}>AmericanTypewriter-Condensed</Text>
                <Text>AmericanTypewriter-CondensedBold</Text>
                <Text style={styles.f9}>AmericanTypewriter-CondensedBold</Text>
                <Text>AmericanTypewriter-CondensedLight</Text>
                <Text style={styles.f10}>AmericanTypewriter-CondensedLight</Text>
                <Text>AmericanTypewriter-Light</Text>
                <Text style={styles.f11}>AmericanTypewriter-Light</Text>
                <Text>Apple Color Emoji</Text>
                <Text style={styles.f12}>Apple Color Emoji</Text>
                <Text>Apple SD Gothic Neo</Text>
                <Text style={styles.f13}>Apple SD Gothic Neo</Text>
                <Text>AppleColorEmoji</Text>
                <Text style={styles.f14}>AppleColorEmoji</Text>
                <Text>AppleSDGothicNeo-Bold</Text>
                <Text style={styles.f15}>AppleSDGothicNeo-Bold</Text>
                <Text>AppleSDGothicNeo-Light</Text>
                <Text style={styles.f16}>AppleSDGothicNeo-Light</Text>
                <Text>AppleSDGothicNeo-Medium</Text>
                <Text style={styles.f17}>AppleSDGothicNeo-Medium</Text>
                <Text>AppleSDGothicNeo-Regular</Text>
                <Text style={styles.f18}>AppleSDGothicNeo-Regular</Text>
                <Text>AppleSDGothicNeo-SemiBold</Text>
                <Text style={styles.f19}>AppleSDGothicNeo-SemiBold</Text>
                <Text>AppleSDGothicNeo-Thin</Text>
                <Text style={styles.f20}>AppleSDGothicNeo-Thin</Text>
                <Text>AppleSDGothicNeo-UltraLight</Text>
                <Text style={styles.f21}>AppleSDGothicNeo-UltraLight</Text>
                <Text>Arial</Text>
                <Text style={styles.f22}>Arial</Text>
                <Text>Arial Hebrew</Text>
                <Text style={styles.f23}>Arial Hebrew</Text>
                <Text>Arial Rounded MT Bold</Text>
                <Text style={styles.f24}>Arial Rounded MT Bold</Text>
                <Text>Arial-BoldItalicMT</Text>
                <Text style={styles.f25}>Arial-BoldItalicMT</Text>
                <Text>Arial-BoldMT</Text>
                <Text style={styles.f26}>Arial-BoldMT</Text>
                <Text>Arial-ItalicMT</Text>
                <Text style={styles.f27}>Arial-ItalicMT</Text>
                <Text>ArialHebrew</Text>
                <Text style={styles.f28}>ArialHebrew</Text>
                <Text>ArialHebrew-Bold</Text>
                <Text style={styles.f29}>ArialHebrew-Bold</Text>
                <Text>ArialHebrew-Light</Text>
                <Text style={styles.f30}>ArialHebrew-Light</Text>
                <Text>ArialMT</Text>
                <Text style={styles.f31}>ArialMT</Text>
                <Text>ArialRoundedMTBold</Text>
                <Text style={styles.f32}>ArialRoundedMTBold</Text>
                <Text>Avenir</Text>
                <Text style={styles.f33}>Avenir</Text>
                <Text>Avenir Next</Text>
                <Text style={styles.f34}>Avenir Next</Text>
                <Text>Avenir Next Condensed</Text>
                <Text style={styles.f35}>Avenir Next Condensed</Text>
                <Text>Avenir-Black</Text>
                <Text style={styles.f36}>Avenir-Black</Text>
                <Text>Avenir-BlackOblique</Text>
                <Text style={styles.f37}>Avenir-BlackOblique</Text>
                <Text>Avenir-Book</Text>
                <Text style={styles.f38}>Avenir-Book</Text>
                <Text>Avenir-BookOblique</Text>
                <Text style={styles.f39}>Avenir-BookOblique</Text>
                <Text>Avenir-Heavy</Text>
                <Text style={styles.f40}>Avenir-Heavy</Text>
                <Text>Avenir-HeavyOblique</Text>
                <Text style={styles.f41}>Avenir-HeavyOblique</Text>
                <Text>Avenir-Light</Text>
                <Text style={styles.f42}>Avenir-Light</Text>
                <Text>Avenir-LightOblique</Text>
                <Text style={styles.f43}>Avenir-LightOblique</Text>
                <Text>Avenir-Medium</Text>
                <Text style={styles.f44}>Avenir-Medium</Text>
                <Text>Avenir-MediumOblique</Text>
                <Text style={styles.f45}>Avenir-MediumOblique</Text>
                <Text>Avenir-Oblique</Text>
                <Text style={styles.f46}>Avenir-Oblique</Text>
                <Text>Avenir-Roman</Text>
                <Text style={styles.f47}>Avenir-Roman</Text>
                <Text>AvenirNext-Bold</Text>
                <Text style={styles.f48}>AvenirNext-Bold</Text>
                <Text>AvenirNext-BoldItalic</Text>
                <Text style={styles.f49}>AvenirNext-BoldItalic</Text>
                <Text>AvenirNext-DemiBold</Text>
                <Text style={styles.f50}>AvenirNext-DemiBold</Text>
                <Text>AvenirNext-DemiBoldItalic</Text>
                <Text style={styles.f51}>AvenirNext-DemiBoldItalic</Text>
                <Text>AvenirNext-Heavy</Text>
                <Text style={styles.f52}>AvenirNext-Heavy</Text>
                <Text>AvenirNext-HeavyItalic</Text>
                <Text style={styles.f53}>AvenirNext-HeavyItalic</Text>
                <Text>AvenirNext-Italic</Text>
                <Text style={styles.f54}>AvenirNext-Italic</Text>
                <Text>AvenirNext-Medium</Text>
                <Text style={styles.f55}>AvenirNext-Medium</Text>
                <Text>AvenirNext-MediumItalic</Text>
                <Text style={styles.f56}>AvenirNext-MediumItalic</Text>
                <Text>AvenirNext-Regular</Text>
                <Text style={styles.f57}>AvenirNext-Regular</Text>
                <Text>AvenirNext-UltraLight</Text>
                <Text style={styles.f58}>AvenirNext-UltraLight</Text>
                <Text>AvenirNext-UltraLightItalic</Text>
                <Text style={styles.f59}>AvenirNext-UltraLightItalic</Text>
                <Text>AvenirNextCondensed-Bold</Text>
                <Text style={styles.f60}>AvenirNextCondensed-Bold</Text>
                <Text>AvenirNextCondensed-BoldItalic</Text>
                <Text style={styles.f61}>AvenirNextCondensed-BoldItalic</Text>
                <Text>AvenirNextCondensed-DemiBold</Text>
                <Text style={styles.f62}>AvenirNextCondensed-DemiBold</Text>
                <Text>AvenirNextCondensed-DemiBoldItalic</Text>
                <Text style={styles.f63}>AvenirNextCondensed-DemiBoldItalic</Text>
                <Text>AvenirNextCondensed-Heavy</Text>
                <Text style={styles.f64}>AvenirNextCondensed-Heavy</Text>
                <Text>AvenirNextCondensed-HeavyItalic</Text>
                <Text style={styles.f65}>AvenirNextCondensed-HeavyItalic</Text>
                <Text>AvenirNextCondensed-Italic</Text>
                <Text style={styles.f66}>AvenirNextCondensed-Italic</Text>
                <Text>AvenirNextCondensed-Medium</Text>
                <Text style={styles.f67}>AvenirNextCondensed-Medium</Text>
                <Text>AvenirNextCondensed-MediumItalic</Text>
                <Text style={styles.f68}>AvenirNextCondensed-MediumItalic</Text>
                <Text>AvenirNextCondensed-Regular</Text>
                <Text style={styles.f69}>AvenirNextCondensed-Regular</Text>
                <Text>AvenirNextCondensed-UltraLight</Text>
                <Text style={styles.f70}>AvenirNextCondensed-UltraLight</Text>
                <Text>AvenirNextCondensed-UltraLightItalic</Text>
                <Text style={styles.f71}>AvenirNextCondensed-UltraLightItalic</Text>
                <Text>Baskerville</Text>
                <Text style={styles.f73}>Baskerville</Text>
                <Text>Baskerville-Bold</Text>
                <Text style={styles.f74}>Baskerville-Bold</Text>
                <Text>Baskerville-BoldItalic</Text>
                <Text style={styles.f75}>Baskerville-BoldItalic</Text>
                <Text>Baskerville-Italic</Text>
                <Text style={styles.f76}>Baskerville-Italic</Text>
                <Text>Baskerville-SemiBold</Text>
                <Text style={styles.f77}>Baskerville-SemiBold</Text>
                <Text>Baskerville-SemiBoldItalic</Text>
                <Text style={styles.f78}>Baskerville-SemiBoldItalic</Text>
                <Text>Bodoni 72</Text>
                <Text style={styles.f79}>Bodoni 72</Text>
                <Text>Bodoni 72 Oldstyle</Text>
                <Text style={styles.f80}>Bodoni 72 Oldstyle</Text>
                <Text>Bodoni 72 Smallcaps</Text>
                <Text style={styles.f81}>Bodoni 72 Smallcaps</Text>
                <Text>Bodoni Ornaments</Text>
                <Text style={styles.f82}>Bodoni Ornaments</Text>
                <Text>BodoniOrnamentsITCTT</Text>
                <Text style={styles.f83}>BodoniOrnamentsITCTT</Text>
                <Text>BodoniSvtyTwoITCTT-Bold</Text>
                <Text style={styles.f84}>BodoniSvtyTwoITCTT-Bold</Text>
                <Text>BodoniSvtyTwoITCTT-Book</Text>
                <Text style={styles.f85}>BodoniSvtyTwoITCTT-Book</Text>
                <Text>ChalkboardSE-Bold</Text>
                <Text style={styles.f93}>ChalkboardSE-Bold</Text>
                <Text>ChalkboardSE-Light</Text>
                <Text style={styles.f94}>ChalkboardSE-Light</Text>
                <Text>ChalkboardSE-Regular</Text>
                <Text style={styles.f95}>ChalkboardSE-Regular</Text>
                <Text>Chalkduster</Text>
                <Text style={styles.f96}>Chalkduster</Text>
                <Text>Cochin</Text>
                <Text style={styles.f97}>Cochin</Text>
                <Text>Cochin-Bold</Text>
                <Text style={styles.f98}>Cochin-Bold</Text>
                <Text>Cochin-BoldItalic</Text>
                <Text style={styles.f99}>Cochin-BoldItalic</Text>

                <Text>Cochin-Italic</Text>
                <Text style={styles.f100}>Cochin-Italic</Text>
                <Text>Copperplate</Text>
                <Text style={styles.f101}>Copperplate</Text>
                <Text>Copperplate-Bold</Text>
                <Text style={styles.f102}>Copperplate-Bold</Text>
                <Text>Copperplate-Light</Text>
                <Text style={styles.f103}>Copperplate-Light</Text>
                <Text>Courier</Text>
                <Text style={styles.f104}>Courier</Text>
                <Text>Courier New</Text>
                <Text style={styles.f105}>Courier New</Text>
                <Text>Courier-Bold</Text>
                <Text style={styles.f106}>Courier-Bold</Text>
                <Text>Courier-BoldOblique</Text>
                <Text style={styles.f107}>Courier-BoldOblique</Text>
                <Text>Courier-Oblique</Text>
                <Text style={styles.f108}>Courier-Oblique</Text>
                <Text>CourierNewPS-BoldItalicMT</Text>
                <Text style={styles.f109}>CourierNewPS-BoldItalicMT</Text>
                <Text>CourierNewPS-BoldMT</Text>
                <Text style={styles.f110}>CourierNewPS-BoldMT</Text>
                <Text>CourierNewPS-ItalicMT</Text>
                <Text style={styles.f111}>CourierNewPS-ItalicMT</Text>
                <Text>CourierNewPSMT</Text>
                <Text style={styles.f112}>CourierNewPSMT</Text>
                <Text>Damascus</Text>
                <Text style={styles.f113}>Damascus</Text>
                <Text>DamascusBold</Text>
                <Text style={styles.f114}>DamascusBold</Text>
                <Text>DamascusLight</Text>
                <Text style={styles.f115}>DamascusLight</Text>
                <Text>DamascusMedium</Text>
                <Text style={styles.f116}>DamascusMedium</Text>
                <Text>DamascusSemiBold</Text>
                <Text style={styles.f117}>DamascusSemiBold</Text>
                <Text>Devanagari Sangam MN</Text>
                <Text style={styles.f118}>Devanagari Sangam MN</Text>
                <Text>DevanagariSangamMN</Text>
                <Text style={styles.f119}>DevanagariSangamMN</Text>
                <Text>DevanagariSangamMN-Bold</Text>
                <Text style={styles.f120}>DevanagariSangamMN-Bold</Text>
                <Text>Didot</Text>
                <Text style={styles.f121}>Didot</Text>
                <Text>Didot-Bold</Text>
                <Text style={styles.f122}>Didot-Bold</Text>
                <Text>Didot-Italic</Text>
                <Text style={styles.f123}>Didot-Italic</Text>
                <Text>DiwanMishafi</Text>
                <Text style={styles.f124}>DiwanMishafi</Text>
                <Text>Euphemia UCAS</Text>
                <Text style={styles.f125}>Euphemia UCAS</Text>
                <Text>EuphemiaUCAS-Bold</Text>
                <Text style={styles.f126}>EuphemiaUCAS-Bold</Text>
                <Text>EuphemiaUCAS-Italic</Text>
                <Text style={styles.f127}>EuphemiaUCAS-Italic</Text>
                <Text>Farah</Text>
                <Text style={styles.f128}>Farah</Text>
                <Text>Futura</Text>
                <Text style={styles.f129}>Futura</Text>
                <Text>Futura-CondensedExtraBold</Text>
                <Text style={styles.f130}>Futura-CondensedExtraBold</Text>
                <Text>Futura-CondensedMedium</Text>
                <Text style={styles.f131}>Futura-CondensedMedium</Text>
                <Text>Futura-Medium</Text>
                <Text style={styles.f132}>Futura-Medium</Text>
                <Text>Futura-MediumItalic</Text>
                <Text style={styles.f133}>Futura-MediumItalic</Text>
                <Text>Geeza Pro</Text>
                <Text style={styles.f134}>Geeza Pro</Text>
                <Text>GeezaPro-Bold</Text>
                <Text style={styles.f135}>GeezaPro-Bold</Text>
                <Text>Georgia</Text>
                <Text style={styles.f136}>Georgia</Text>
                <Text>Georgia-Bold</Text>
                <Text style={styles.f137}>Georgia-Bold</Text>
                <Text>Georgia-BoldItalic</Text>
                <Text style={styles.f138}>Georgia-BoldItalic</Text>
                <Text>Georgia-Italic</Text>
                <Text style={styles.f139}>Georgia-Italic</Text>
                <Text>Gill Sans</Text>
                <Text style={styles.f140}>Gill Sans</Text>
                <Text>GillSans-Bold</Text>
                <Text style={styles.f141}>GillSans-Bold</Text>
                <Text>GillSans-BoldItalic</Text>
                <Text style={styles.f142}>GillSans-BoldItalic</Text>
                <Text>GillSans-Italic</Text>
                <Text style={styles.f143}>GillSans-Italic</Text>
                <Text>GillSans-Light</Text>
                <Text style={styles.f144}>GillSans-Light</Text>
                <Text>GillSans-LightItalic</Text>
                <Text style={styles.f145}>GillSans-LightItalic</Text>
                <Text>GillSans-SemiBold</Text>
                <Text style={styles.f146}>GillSans-SemiBold</Text>
                <Text>GillSans-SemiBoldItalic</Text>
                <Text style={styles.f147}>GillSans-SemiBoldItalic</Text>
                <Text>GillSans-UltraBold</Text>
                <Text style={styles.f148}>GillSans-UltraBold</Text>
                <Text>Gujarati Sangam MN</Text>
                <Text style={styles.f149}>Gujarati Sangam MN</Text>
                <Text>GujaratiSangamMN</Text>
                <Text style={styles.f150}>GujaratiSangamMN</Text>
                <Text>GujaratiSangamMN-Bold</Text>
                <Text style={styles.f151}>GujaratiSangamMN-Bold</Text>
                <Text>Gurmukhi MN</Text>
                <Text style={styles.f152}>Gurmukhi MN</Text>
                <Text>GurmukhiMN-Bold</Text>
                <Text style={styles.f153}>GurmukhiMN-Bold</Text>
                <Text>Heiti SC</Text>
                <Text style={styles.f154}>Heiti SC</Text>
                <Text>Heiti TC</Text>
                <Text style={styles.f155}>Heiti TC</Text>
                <Text>Helvetica</Text>
                <Text style={styles.f156}>Helvetica</Text>
                <Text>Helvetica Neue</Text>
                <Text style={styles.f157}>Helvetica Neue</Text>
                <Text>Helvetica-Bold</Text>
                <Text style={styles.f158}>Helvetica-Bold</Text>
                <Text>Helvetica-BoldOblique</Text>
                <Text style={styles.f159}>Helvetica-BoldOblique</Text>
                <Text>Helvetica-Light</Text>
                <Text style={styles.f160}>Helvetica-Light</Text>
                <Text>Helvetica-LightOblique</Text>
                <Text style={styles.f161}>Helvetica-LightOblique</Text>
                <Text>Helvetica-Oblique</Text>
                <Text style={styles.f162}>Helvetica-Oblique</Text>
                <Text>HelveticaNeue-Bold</Text>
                <Text style={styles.f163}>HelveticaNeue-Bold</Text>
                <Text>HelveticaNeue-BoldItalic</Text>
                <Text style={styles.f164}>HelveticaNeue-BoldItalic</Text>
                <Text>HelveticaNeue-CondensedBlack</Text>
                <Text style={styles.f165}>HelveticaNeue-CondensedBlack</Text>
                <Text>HelveticaNeue-CondensedBold</Text>
                <Text style={styles.f166}>HelveticaNeue-CondensedBold</Text>
                <Text>HelveticaNeue-Italic</Text>
                <Text style={styles.f167}>HelveticaNeue-Italic</Text>
                <Text>HelveticaNeue-Light</Text>
                <Text style={styles.f168}>HelveticaNeue-Light</Text>
                <Text>HelveticaNeue-LightItalic</Text>
                <Text style={styles.f169}>HelveticaNeue-LightItalic</Text>
                <Text>HelveticaNeue-Medium</Text>
                <Text style={styles.f170}>HelveticaNeue-Medium</Text>
                <Text>HelveticaNeue-MediumItalic</Text>
                <Text style={styles.f171}>HelveticaNeue-MediumItalic</Text>
                <Text>HelveticaNeue-Thin</Text>
                <Text style={styles.f172}>HelveticaNeue-Thin</Text>
                <Text>HelveticaNeue-ThinItalic</Text>
                <Text style={styles.f173}>HelveticaNeue-ThinItalic</Text>
                <Text>HelveticaNeue-UltraLight</Text>
                <Text style={styles.f174}>HelveticaNeue-UltraLight</Text>
                <Text>HelveticaNeue-UltraLightItalic</Text>
                <Text style={styles.f175}>HelveticaNeue-UltraLightItalic</Text>
                <Text>Hiragino Mincho ProN</Text>
                <Text style={styles.f176}>Hiragino Mincho ProN</Text>
                <Text>Hiragino Sans</Text>
                <Text style={styles.f177}>Hiragino Sans</Text>
                <Text>HiraginoSans-W3</Text>
                <Text style={styles.f178}>HiraginoSans-W3</Text>
                <Text>HiraginoSans-W6</Text>
                <Text style={styles.f179}>HiraginoSans-W6</Text>
                <Text>HiraMinProN-W3</Text>
                <Text style={styles.f180}>HiraMinProN-W3</Text>
                <Text>HiraMinProN-W6</Text>
                <Text style={styles.f181}>HiraMinProN-W6</Text>
                <Text>Hoefler Text</Text>
                <Text style={styles.f182}>Hoefler Text</Text>
                <Text>HoeflerText-Black</Text>
                <Text style={styles.f183}>HoeflerText-Black</Text>
                <Text>HoeflerText-BlackItalic</Text>
                <Text style={styles.f184}>HoeflerText-BlackItalic</Text>
                <Text>HoeflerText-Italic</Text>
                <Text style={styles.f185}>HoeflerText-Italic</Text>
                <Text>HoeflerText-Regular</Text>
                <Text style={styles.f186}>HoeflerText-Regular</Text>
                <Text>Iowan Old Style</Text>
                <Text style={styles.f187}>Iowan Old Style</Text>
                <Text>IowanOldStyle-Bold</Text>
                <Text style={styles.f188}>IowanOldStyle-Bold</Text>
                <Text>IowanOldStyle-BoldItalic</Text>
                <Text style={styles.f189}>IowanOldStyle-BoldItalic</Text>
                <Text>IowanOldStyle-Italic</Text>
                <Text style={styles.f190}>IowanOldStyle-Italic</Text>
                <Text>IowanOldStyle-Roman</Text>
                <Text style={styles.f191}>IowanOldStyle-Roman</Text>
                <Text>Kailasa</Text>
                <Text style={styles.f192}>Kailasa</Text>
                <Text>Kailasa-Bold</Text>
                <Text style={styles.f193}>Kailasa-Bold</Text>
                <Text>Kannada Sangam MN</Text>
                <Text style={styles.f194}>Kannada Sangam MN</Text>
                <Text>KannadaSangamMN</Text>
                <Text style={styles.f195}>KannadaSangamMN</Text>
                <Text>KannadaSangamMN-Bold</Text>
                <Text style={styles.f196}>KannadaSangamMN-Bold</Text>
                <Text>Khmer Sangam MN</Text>
                <Text style={styles.f197}>Khmer Sangam MN</Text>
                <Text>Kohinoor Bangla</Text>
                <Text style={styles.f198}>Kohinoor Bangla</Text>
                <Text>Kohinoor Devanagari</Text>
                <Text style={styles.f199}>Kohinoor Devanagari</Text>
                <Text>Kohinoor Telugu</Text>
                <Text style={styles.f200}>Kohinoor Telugu</Text>
                <Text>KohinoorBangla-Light</Text>
                <Text style={styles.f201}>KohinoorBangla-Light</Text>
                <Text>KohinoorBangla-Regular</Text>
                <Text style={styles.f202}>KohinoorBangla-Regular</Text>
                <Text>KohinoorBangla-Semibold</Text>
                <Text style={styles.f203}>KohinoorBangla-Semibold</Text>
                <Text>KohinoorDevanagari-Light</Text>
                <Text style={styles.f204}>KohinoorDevanagari-Light</Text>
                <Text>KohinoorDevanagari-Regular</Text>
                <Text style={styles.f205}>KohinoorDevanagari-Regular</Text>
                <Text>KohinoorDevanagari-Semibold</Text>
                <Text style={styles.f206}>KohinoorDevanagari-Semibold</Text>
                <Text>KohinoorTelugu-Light</Text>
                <Text style={styles.f207}>KohinoorTelugu-Light</Text>
                <Text>KohinoorTelugu-Medium</Text>
                <Text style={styles.f208}>KohinoorTelugu-Medium</Text>
                <Text>KohinoorTelugu-Regular</Text>
                <Text style={styles.f209}>KohinoorTelugu-Regular</Text>
                <Text>Lao Sangam MN</Text>
                <Text style={styles.f210}>Lao Sangam MN</Text>
                <Text>Malayalam Sangam MN</Text>
                <Text style={styles.f211}>Malayalam Sangam MN</Text>
                <Text>MalayalamSangamMN</Text>
                <Text style={styles.f212}>MalayalamSangamMN</Text>
                <Text>MalayalamSangamMN-Bold</Text>
                <Text style={styles.f213}>MalayalamSangamMN-Bold</Text>
                <Text>Marker Felt</Text>
                <Text style={styles.f214}>Marker Felt</Text>
                <Text>MarkerFelt-Thin</Text>
                <Text style={styles.f215}>MarkerFelt-Thin</Text>
                <Text>MarkerFelt-Wide</Text>
                <Text style={styles.f216}>MarkerFelt-Wide</Text>
                <Text>Menlo</Text>
                <Text style={styles.f217}>Menlo</Text>
                <Text>Menlo-Bold</Text>
                <Text style={styles.f218}>Menlo-Bold</Text>
                <Text>Menlo-BoldItalic</Text>
                <Text style={styles.f219}>Menlo-BoldItalic</Text>
                <Text>Menlo-Italic</Text>
                <Text style={styles.f220}>Menlo-Italic</Text>
                <Text>Menlo-Regular</Text>
                <Text style={styles.f221}>Menlo-Regular</Text>
                <Text>Mishafi</Text>
                <Text style={styles.f222}>Mishafi</Text>
                <Text>Noteworthy</Text>
                <Text style={styles.f223}>Noteworthy</Text>
                <Text>Noteworthy-Bold</Text>
                <Text style={styles.f224}>Noteworthy-Bold</Text>
                <Text>Noteworthy-Light</Text>
                <Text style={styles.f225}>Noteworthy-Light</Text>
                <Text>Optima</Text>
                <Text style={styles.f226}>Optima</Text>
                <Text>Optima-Bold</Text>
                <Text style={styles.f227}>Optima-Bold</Text>
                <Text>Optima-BoldItalic</Text>
                <Text style={styles.f228}>Optima-BoldItalic</Text>
                <Text>Optima-ExtraBlack</Text>
                <Text style={styles.f229}>Optima-ExtraBlack</Text>
                <Text>Optima-Italic</Text>
                <Text style={styles.f230}>Optima-Italic</Text>
                <Text>Optima-Regular</Text>
                <Text style={styles.f231}>Optima-Regular</Text>
                <Text>Oriya Sangam MN</Text>
                <Text style={styles.f232}>Oriya Sangam MN</Text>
                <Text>OriyaSangamMN</Text>
                <Text style={styles.f233}>OriyaSangamMN</Text>
                <Text>OriyaSangamMN-Bold</Text>
                <Text style={styles.f234}>OriyaSangamMN-Bold</Text>
                <Text>Palatino</Text>
                <Text style={styles.f235}>Palatino</Text>
                <Text>Palatino-Bold</Text>
                <Text style={styles.f236}>Palatino-Bold</Text>
                <Text>Palatino-BoldItalic</Text>
                <Text style={styles.f237}>Palatino-BoldItalic</Text>
                <Text>Palatino-Italic</Text>
                <Text style={styles.f238}>Palatino-Italic</Text>
                <Text>Palatino-Roman</Text>
                <Text style={styles.f239}>Palatino-Roman</Text>
                <Text>Papyrus</Text>
                <Text style={styles.f240}>Papyrus</Text>
                <Text>Papyrus-Condensed</Text>
                <Text style={styles.f241}>Papyrus-Condensed</Text>
                <Text>Party LET</Text>
                <Text style={styles.f242}>Party LET</Text>
                <Text>PartyLetPlain</Text>
                <Text style={styles.f243}>PartyLetPlain</Text>
                <Text>PingFang HK</Text>
                <Text style={styles.f244}>PingFang HK</Text>
                <Text>PingFang SC</Text>
                <Text style={styles.f245}>PingFang SC</Text>
                <Text>PingFang TC</Text>
                <Text style={styles.f246}>PingFang TC</Text>
                <Text>PingFangHK-Light</Text>
                <Text style={styles.f247}>PingFangHK-Light</Text>
                <Text>PingFangHK-Medium</Text>
                <Text style={styles.f248}>PingFangHK-Medium</Text>
                <Text>PingFangHK-Regular</Text>
                <Text style={styles.f249}>PingFangHK-Regular</Text>
                <Text>PingFangHK-Semibold</Text>
                <Text style={styles.f250}>PingFangHK-Semibold</Text>
                <Text>PingFangHK-Thin</Text>
                <Text style={styles.f251}>PingFangHK-Thin</Text>
                <Text>PingFangHK-Ultralight</Text>
                <Text style={styles.f252}>PingFangHK-Ultralight</Text>
                <Text>PingFangSC-Light</Text>
                <Text style={styles.f253}>PingFangSC-Light</Text>
                <Text>PingFangSC-Medium</Text>
                <Text style={styles.f254}>PingFangSC-Medium</Text>
                <Text>PingFangSC-Regular</Text>
                <Text style={styles.f255}>PingFangSC-Regular</Text>
                <Text>PingFangSC-Semibold</Text>
                <Text style={styles.f256}>PingFangSC-Semibold</Text>
                <Text>PingFangSC-Thin</Text>
                <Text style={styles.f257}>PingFangSC-Thin</Text>
                <Text>PingFangSC-Ultralight</Text>
                <Text style={styles.f258}>PingFangSC-Ultralight</Text>
                <Text>PingFangTC-Light</Text>
                <Text style={styles.f259}>PingFangTC-Light</Text>
                <Text>PingFangTC-Medium</Text>
                <Text style={styles.f260}>PingFangTC-Medium</Text>
                <Text>PingFangTC-Regular</Text>
                <Text style={styles.f261}>PingFangTC-Regular</Text>
                <Text>PingFangTC-Semibold</Text>
                <Text style={styles.f262}>PingFangTC-Semibold</Text>
                <Text>PingFangTC-Thin</Text>
                <Text style={styles.f263}>PingFangTC-Thin</Text>
                <Text>PingFangTC-Ultralight</Text>
                <Text style={styles.f264}>PingFangTC-Ultralight</Text>
                <Text>Savoye LET</Text>
                <Text style={styles.f265}>Savoye LET</Text>
                <Text>SavoyeLetPlain</Text>
                <Text style={styles.f266}>SavoyeLetPlain</Text>
                <Text>Sinhala Sangam MN</Text>
                <Text style={styles.f267}>Sinhala Sangam MN</Text>
                <Text>SinhalaSangamMN</Text>
                <Text style={styles.f268}>SinhalaSangamMN</Text>
                <Text>SinhalaSangamMN-Bold</Text>
                <Text style={styles.f269}>SinhalaSangamMN-Bold</Text>
                <Text>Snell Roundhand</Text>
                <Text style={styles.f270}>Snell Roundhand</Text>
                <Text>SnellRoundhand-Black</Text>
                <Text style={styles.f271}>SnellRoundhand-Black</Text>
                <Text>SnellRoundhand-Bold</Text>
                <Text style={styles.f272}>SnellRoundhand-Bold</Text>
                <Text>Symbol</Text>
                <Text style={styles.f273}>Symbol</Text>
                <Text>Tamil Sangam MN</Text>
                <Text style={styles.f274}>Tamil Sangam MN</Text>
                <Text>TamilSangamMN-Bold</Text>
                <Text style={styles.f275}>TamilSangamMN-Bold</Text>
                <Text>Telugu Sangam MN</Text>
                <Text style={styles.f276}>Telugu Sangam MN</Text>
                <Text>Thonburi</Text>
                <Text style={styles.f277}>Thonburi</Text>
                <Text>Thonburi-Bold</Text>
                <Text style={styles.f278}>Thonburi-Bold</Text>
                <Text>Thonburi-Light</Text>
                <Text style={styles.f279}>Thonburi-Light</Text>
                <Text>Times New Roman</Text>
                <Text style={styles.f280}>Times New Roman</Text>
                <Text>TimesNewRomanPS-BoldItalicMT</Text>
                <Text style={styles.f281}>TimesNewRomanPS-BoldItalicMT</Text>
                <Text>TimesNewRomanPS-BoldMT</Text>
                <Text style={styles.f282}>TimesNewRomanPS-BoldMT</Text>
                <Text>TimesNewRomanPS-ItalicMT</Text>
                <Text style={styles.f283}>TimesNewRomanPS-ItalicMT</Text>
                <Text>TimesNewRomanPSMT</Text>
                <Text style={styles.f284}>TimesNewRomanPSMT</Text>
                <Text>Trebuchet MS</Text>
                <Text style={styles.f285}>Trebuchet MS</Text>
                <Text>Trebuchet-BoldItalic</Text>
                <Text style={styles.f286}>Trebuchet-BoldItalic</Text>
                <Text>TrebuchetMS-Bold</Text>
                <Text style={styles.f287}>TrebuchetMS-Bold</Text>
                <Text>TrebuchetMS-Italic</Text>
                <Text style={styles.f288}>TrebuchetMS-Italic</Text>
                <Text>Verdana</Text>
                <Text style={styles.f289}>Verdana</Text>
                <Text>Verdana-Bold</Text>
                <Text style={styles.f290}>Verdana-Bold</Text>
                <Text>Verdana-BoldItalic</Text>
                <Text style={styles.f291}>Verdana-BoldItalic</Text>
                <Text>Verdana-Italic</Text>
                <Text style={styles.f292}>Verdana-Italic</Text>
                <Text>Zapf Dingbats</Text>
                <Text style={styles.f293}>Zapf Dingbats</Text>
                <Text>ZapfDingbatsITC</Text>
                <Text style={styles.f294}>ZapfDingbatsITC</Text>
                <Text>Zapfino</Text>
                <Text style={styles.f295}>Zapfino</Text>


                {/* Android */}
                <Text>normal</Text>
                <Text style={styles.f296}>normal</Text>
                <Text>notoserif</Text>
                <Text style={styles.f297}>notoserif</Text>
                <Text>sans-serif</Text>
                <Text style={styles.f298}>sans-serif</Text>
                <Text>sans-serif-light</Text>
                <Text style={styles.f299}>sans-serif-light</Text>
                <Text>sans-serif-thin</Text>
                <Text style={styles.f300}>sans-serif-thin</Text>
                <Text>sans-serif-condensed</Text>
                <Text style={styles.f301}>sans-serif-condensed</Text>
                <Text>sans-serif-medium</Text>
                <Text style={styles.f302}>sans-serif-medium</Text>
                <Text>serif</Text>
                <Text style={styles.f303}>serif</Text>


            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    Families: {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 45
    },
    container: {
        margin: 10,
        marginBottom: 20
    },
    f1: {
        fontFamily: font1,
        fontSize: 30
    },
    f2: {
        fontFamily: font2,
        fontSize: 30
    },
    f3: {
        fontFamily: font3,
        fontSize: 30
    },
    f4: {
        fontFamily: font4,
        fontSize: 30
    },
    f5: {
        fontFamily: font5,
        fontSize: 30
    },
    f6: {
        fontFamily: font6,
        fontSize: 30
    },
    f7: {
        fontFamily: font7,
        fontSize: 30
    },
    f8: {
        fontFamily: font8,
        fontSize: 30
    },
    f9: {
        fontFamily: font9,
        fontSize: 30
    },
    f10: {
        fontFamily: font10,
        fontSize: 30
    },
    f11: {
        fontFamily: font11,
        fontSize: 30
    },
    f12: {
        fontFamily: font12,
        fontSize: 30
    },
    f13: {
        fontFamily: font13,
        fontSize: 30
    },
    f14: {
        fontFamily: font14,
        fontSize: 30
    },
    f15: {
        fontFamily: font15,
        fontSize: 30
    },
    f16: {
        fontFamily: font16,
        fontSize: 30
    },
    f17: {
        fontFamily: font17,
        fontSize: 30
    },
    f18: {
        fontFamily: font18,
        fontSize: 30
    },
    f19: {
        fontFamily: font19,
        fontSize: 30
    },
    f20: {
        fontFamily: font20,
        fontSize: 30
    },
    f21: {
        fontFamily: font21,
        fontSize: 30
    },
    f22: {
        fontFamily: font22,
        fontSize: 30
    },
    f23: {
        fontFamily: font23,
        fontSize: 30
    },
    f24: {
        fontFamily: font24,
        fontSize: 30
    },
    f25: {
        fontFamily: font25,
        fontSize: 30
    },
    f26: {
        fontFamily: font26,
        fontSize: 30
    },
    f27: {
        fontFamily: font27,
        fontSize: 30
    },
    f28: {
        fontFamily: font28,
        fontSize: 30
    },
    f29: {
        fontFamily: font29,
        fontSize: 30
    },
    f30: {
        fontFamily: font30,
        fontSize: 30
    },
    f31: {
        fontFamily: font31,
        fontSize: 30
    },
    f33: {
        fontFamily: font33,
        fontSize: 30
    },
    f32: {
        fontFamily: font32,
        fontSize: 30
    },
    f33: {
        fontFamily: font33,
        fontSize: 30
    },
    f34: {
        fontFamily: font34,
        fontSize: 30
    },
    f35: {
        fontFamily: font35,
        fontSize: 30
    },
    f36: {
        fontFamily: font36,
        fontSize: 30
    },
    f37: {
        fontFamily: font37,
        fontSize: 30
    },
    f38: {
        fontFamily: font38,
        fontSize: 30
    },
    f39: {
        fontFamily: font39,
        fontSize: 30
    },
    f40: {
        fontFamily: font40,
        fontSize: 30
    },
    f41: {
        fontFamily: font41,
        fontSize: 30
    },
    f42: {
        fontFamily: font42,
        fontSize: 30
    },
    f43: {
        fontFamily: font43,
        fontSize: 30
    },
    f44: {
        fontFamily: font44,
        fontSize: 30
    },
    f45: {
        fontFamily: font45,
        fontSize: 30
    },
    f46: {
        fontFamily: font46,
        fontSize: 30
    },
    f47: {
        fontFamily: font47,
        fontSize: 30
    },
    f48: {
        fontFamily: font48,
        fontSize: 30
    },
    f49: {
        fontFamily: font49,
        fontSize: 30
    },
    f50: {
        fontFamily: font50,
        fontSize: 30
    },
    f51: {
        fontFamily: font51,
        fontSize: 30
    },
    f52: {
        fontFamily: font52,
        fontSize: 30
    },
    f53: {
        fontFamily: font53,
        fontSize: 30
    },
    f54: {
        fontFamily: font54,
        fontSize: 30
    },
    f55: {
        fontFamily: font55,
        fontSize: 30
    },
    f56: {
        fontFamily: font56,
        fontSize: 30
    },
    f57: {
        fontFamily: font57,
        fontSize: 30
    },
    f58: {
        fontFamily: font58,
        fontSize: 30
    },
    f59: {
        fontFamily: font59,
        fontSize: 30
    },
    f60: {
        fontFamily: font60,
        fontSize: 30
    },
    f61: {
        fontFamily: font61,
        fontSize: 30
    },
    f62: {
        fontFamily: font62,
        fontSize: 30
    },
    f63: {
        fontFamily: font63,
        fontSize: 30
    },
    f64: {
        fontFamily: font64,
        fontSize: 30
    },
    f65: {
        fontFamily: font65,
        fontSize: 30
    },
    f66: {
        fontFamily: font66,
        fontSize: 30
    },
    f67: {
        fontFamily: font67,
        fontSize: 30
    },
    f68: {
        fontFamily: font68,
        fontSize: 30
    },
    f69: {
        fontFamily: font69,
        fontSize: 30
    },
    f70: {
        fontFamily: font70,
        fontSize: 30
    },
    f71: {
        fontFamily: font71,
        fontSize: 30
    },
    f72: {
        fontFamily: font72,
        fontSize: 30
    },
    f73: {
        fontFamily: font73,
        fontSize: 30
    },
    f74: {
        fontFamily: font74,
        fontSize: 30
    },
    f75: {
        fontFamily: font75,
        fontSize: 30
    },
    f76: {
        fontFamily: font76,
        fontSize: 30
    },
    f77: {
        fontFamily: font77,
        fontSize: 30
    },
    f78: {
        fontFamily: font78,
        fontSize: 30
    },
    f79: {
        fontFamily: font79,
        fontSize: 30
    },
    f80: {
        fontFamily: font80,
        fontSize: 30
    },
    f81: {
        fontFamily: font81,
        fontSize: 30
    },
    f82: {
        fontFamily: font82,
        fontSize: 30
    },
    f83: {
        fontFamily: font83,
        fontSize: 30
    },
    f84: {
        fontFamily: font84,
        fontSize: 30
    },
    f85: {
        fontFamily: font85,
        fontSize: 30
    },
    f86: {
        fontFamily: font86,
        fontSize: 30
    },
    f87: {
        fontFamily: font87,
        fontSize: 30
    },
    f88: {
        fontFamily: font88,
        fontSize: 30
    },
    f89: {
        fontFamily: font89,
        fontSize: 30
    },
    f90: {
        fontFamily: font90,
        fontSize: 30
    },
    f91: {
        fontFamily: font91,
        fontSize: 30
    },
    f92: {
        fontFamily: font92,
        fontSize: 30
    },
    f93: {
        fontFamily: font93,
        fontSize: 30
    },
    f94: {
        fontFamily: font94,
        fontSize: 30
    },
    f95: {
        fontFamily: font95,
        fontSize: 30
    },
    f96: {
        fontFamily: font96,
        fontSize: 30
    },
    f97: {
        fontFamily: font97,
        fontSize: 30
    },
    f98: {
        fontFamily: font98,
        fontSize: 30
    },
    f99: {
        fontFamily: font99,
        fontSize: 30
    },
    f100: {
        fontFamily: font100,
        fontSize: 30
    },
    f101: {
        fontFamily: font101,
        fontSize: 30
    },
    f102: {
        fontFamily: font102,
        fontSize: 30
    },
    f103: {
        fontFamily: font103,
        fontSize: 30
    },
    f104: {
        fontFamily: font104,
        fontSize: 30
    },
    f105: {
        fontFamily: font105,
        fontSize: 30
    },
    f106: {
        fontFamily: font106,
        fontSize: 30
    },
    f107: {
        fontFamily: font107,
        fontSize: 30
    },
    f108: {
        fontFamily: font108,
        fontSize: 30
    },
    f109: {
        fontFamily: font109,
        fontSize: 30
    },
    f110: {
        fontFamily: font110,
        fontSize: 30
    },
    f111: {
        fontFamily: font111,
        fontSize: 30
    },
    f112: {
        fontFamily: font112,
        fontSize: 30
    },
    f113: {
        fontFamily: font113,
        fontSize: 30
    },
    f114: {
        fontFamily: font114,
        fontSize: 30
    },
    f115: {
        fontFamily: font115,
        fontSize: 30
    },
    f116: {
        fontFamily: font116,
        fontSize: 30
    },
    f117: {
        fontFamily: font117,
        fontSize: 30
    },
    f118: {
        fontFamily: font118,
        fontSize: 30
    },
    f119: {
        fontFamily: font119,
        fontSize: 30
    },
    f120: {
        fontFamily: font120,
        fontSize: 30
    },
    f121: {
        fontFamily: font121,
        fontSize: 30
    },
    f122: {
        fontFamily: font122,
        fontSize: 30
    },
    f123: {
        fontFamily: font123,
        fontSize: 30
    },
    f124: {
        fontFamily: font124,
        fontSize: 30
    },
    f125: {
        fontFamily: font125,
        fontSize: 30
    },
    f126: {
        fontFamily: font126,
        fontSize: 30
    },
    f127: {
        fontFamily: font127,
        fontSize: 30
    },
    f128: {
        fontFamily: font128,
        fontSize: 30
    },
    f129: {
        fontFamily: font129,
        fontSize: 30
    },
    f130: {
        fontFamily: font130,
        fontSize: 30
    },
    f131: {
        fontFamily: font131,
        fontSize: 30
    },
    f132: {
        fontFamily: font132,
        fontSize: 30
    },
    f133: {
        fontFamily: font133,
        fontSize: 30
    },
    f134: {
        fontFamily: font134,
        fontSize: 30
    },
    f135: {
        fontFamily: font135,
        fontSize: 30
    },
    f136: {
        fontFamily: font136,
        fontSize: 30
    },
    f137: {
        fontFamily: font137,
        fontSize: 30
    },
    f138: {
        fontFamily: font138,
        fontSize: 30
    },
    f139: {
        fontFamily: font139,
        fontSize: 30
    },
    f140: {
        fontFamily: font140,
        fontSize: 30
    },
    f141: {
        fontFamily: font141,
        fontSize: 30
    },
    f142: {
        fontFamily: font142,
        fontSize: 30
    },
    f143: {
        fontFamily: font143,
        fontSize: 30
    },
    f144: {
        fontFamily: font144,
        fontSize: 30
    },
    f145: {
        fontFamily: font145,
        fontSize: 30
    },
    f146: {
        fontFamily: font146,
        fontSize: 30
    },
    f147: {
        fontFamily: font147,
        fontSize: 30
    },
    f148: {
        fontFamily: font148,
        fontSize: 30
    },
    f149: {
        fontFamily: font149,
        fontSize: 30
    },
    f150: {
        fontFamily: font150,
        fontSize: 30
    },
    f151: {
        fontFamily: font151,
        fontSize: 30
    },
    f152: {
        fontFamily: font152,
        fontSize: 30
    },
    f153: {
        fontFamily: font153,
        fontSize: 30
    },
    f154: {
        fontFamily: font154,
        fontSize: 30
    },
    f155: {
        fontFamily: font155,
        fontSize: 30
    },
    f156: {
        fontFamily: font156,
        fontSize: 30
    },
    f157: {
        fontFamily: font157,
        fontSize: 30
    },
    f158: {
        fontFamily: font158,
        fontSize: 30
    },
    f159: {
        fontFamily: font159,
        fontSize: 30
    },
    f160: {
        fontFamily: font160,
        fontSize: 30
    },
    f161: {
        fontFamily: font161,
        fontSize: 30
    },
    f162: {
        fontFamily: font162,
        fontSize: 30
    },
    f163: {
        fontFamily: font163,
        fontSize: 30
    },
    f164: {
        fontFamily: font164,
        fontSize: 30
    },
    f165: {
        fontFamily: font165,
        fontSize: 30
    },
    f166: {
        fontFamily: font166,
        fontSize: 30
    },
    f167: {
        fontFamily: font167,
        fontSize: 30
    },
    f168: {
        fontFamily: font168,
        fontSize: 30
    },
    f169: {
        fontFamily: font169,
        fontSize: 30
    },
    f170: {
        fontFamily: font170,
        fontSize: 30
    },
    f171: {
        fontFamily: font171,
        fontSize: 30
    },
    f172: {
        fontFamily: font172,
        fontSize: 30
    },
    f173: {
        fontFamily: font173,
        fontSize: 30
    },
    f174: {
        fontFamily: font174,
        fontSize: 30
    },
    f175: {
        fontFamily: font175,
        fontSize: 30
    },
    f176: {
        fontFamily: font176,
        fontSize: 30
    },
    f177: {
        fontFamily: font177,
        fontSize: 30
    },
    f178: {
        fontFamily: font178,
        fontSize: 30
    },
    f179: {
        fontFamily: font179,
        fontSize: 30
    },
    f180: {
        fontFamily: font180,
        fontSize: 30
    },
    f181: {
        fontFamily: font181,
        fontSize: 30
    },
    f182: {
        fontFamily: font182,
        fontSize: 30
    },
    f183: {
        fontFamily: font183,
        fontSize: 30
    },
    f184: {
        fontFamily: font184,
        fontSize: 30
    },
    f185: {
        fontFamily: font185,
        fontSize: 30
    },
    f186: {
        fontFamily: font186,
        fontSize: 30
    },
    f187: {
        fontFamily: font187,
        fontSize: 30
    },
    f188: {
        fontFamily: font188,
        fontSize: 30
    },
    f189: {
        fontFamily: font189,
        fontSize: 30
    },
    f190: {
        fontFamily: font190,
        fontSize: 30
    },
    f191: {
        fontFamily: font191,
        fontSize: 30
    },
    f192: {
        fontFamily: font192,
        fontSize: 30
    },
    f193: {
        fontFamily: font193,
        fontSize: 30
    },
    f194: {
        fontFamily: font194,
        fontSize: 30
    },
    f195: {
        fontFamily: font195,
        fontSize: 30
    },
    f196: {
        fontFamily: font196,
        fontSize: 30
    },
    f197: {
        fontFamily: font197,
        fontSize: 30
    },
    f198: {
        fontFamily: font198,
        fontSize: 30
    },
    f199: {
        fontFamily: font199,
        fontSize: 30
    },
    f200: {
        fontFamily: font200,
        fontSize: 30
    },
    f201: {
        fontFamily: font201,
        fontSize: 30
    },
    f202: {
        fontFamily: font202,
        fontSize: 30
    },
    f203: {
        fontFamily: font203,
        fontSize: 30
    },
    f204: {
        fontFamily: font204,
        fontSize: 30
    },
    f205: {
        fontFamily: font205,
        fontSize: 30
    },
    f206: {
        fontFamily: font206,
        fontSize: 30
    },
    f207: {
        fontFamily: font207,
        fontSize: 30
    },
    f208: {
        fontFamily: font208,
        fontSize: 30
    },
    f209: {
        fontFamily: font209,
        fontSize: 30
    },
    f210: {
        fontFamily: font210,
        fontSize: 30
    },
    f211: {
        fontFamily: font211,
        fontSize: 30
    },
    f212: {
        fontFamily: font212,
        fontSize: 30
    },
    f213: {
        fontFamily: font213,
        fontSize: 30
    },
    f214: {
        fontFamily: font214,
        fontSize: 30
    },
    f215: {
        fontFamily: font215,
        fontSize: 30
    },
    f216: {
        fontFamily: font216,
        fontSize: 30
    },
    f217: {
        fontFamily: font217,
        fontSize: 30
    },
    f218: {
        fontFamily: font218,
        fontSize: 30
    },
    f219: {
        fontFamily: font219,
        fontSize: 30
    },
    f220: {
        fontFamily: font220,
        fontSize: 30
    },
    f221: {
        fontFamily: font221,
        fontSize: 30
    },
    f222: {
        fontFamily: font222,
        fontSize: 30
    },
    f223: {
        fontFamily: font223,
        fontSize: 30
    },
    f224: {
        fontFamily: font224,
        fontSize: 30
    },
    f225: {
        fontFamily: font225,
        fontSize: 30
    },
    f226: {
        fontFamily: font226,
        fontSize: 30
    },
    f227: {
        fontFamily: font227,
        fontSize: 30
    },
    f228: {
        fontFamily: font228,
        fontSize: 30
    },
    f229: {
        fontFamily: font229,
        fontSize: 30
    },
    f230: {
        fontFamily: font230,
        fontSize: 30
    },
    f231: {
        fontFamily: font231,
        fontSize: 30
    },
    f232: {
        fontFamily: font232,
        fontSize: 30
    },
    f233: {
        fontFamily: font233,
        fontSize: 30
    },
    f234: {
        fontFamily: font234,
        fontSize: 30
    },
    f235: {
        fontFamily: font235,
        fontSize: 30
    },
    f236: {
        fontFamily: font236,
        fontSize: 30
    },
    f237: {
        fontFamily: font237,
        fontSize: 30
    },
    f238: {
        fontFamily: font238,
        fontSize: 30
    },
    f239: {
        fontFamily: font239,
        fontSize: 30
    },
    f240: {
        fontFamily: font240,
        fontSize: 30
    },
    f241: {
        fontFamily: font241,
        fontSize: 30
    },
    f242: {
        fontFamily: font242,
        fontSize: 30
    },
    f243: {
        fontFamily: font243,
        fontSize: 30
    },
    f244: {
        fontFamily: font244,
        fontSize: 30
    },
    f245: {
        fontFamily: font245,
        fontSize: 30
    },
    f246: {
        fontFamily: font246,
        fontSize: 30
    },
    f247: {
        fontFamily: font247,
        fontSize: 30
    },
    f248: {
        fontFamily: font248,
        fontSize: 30
    },
    f249: {
        fontFamily: font249,
        fontSize: 30
    },
    f250: {
        fontFamily: font250,
        fontSize: 30
    },
    f251: {
        fontFamily: font251,
        fontSize: 30
    },
    f252: {
        fontFamily: font252,
        fontSize: 30
    },
    f253: {
        fontFamily: font253,
        fontSize: 30
    },
    f254: {
        fontFamily: font254,
        fontSize: 30
    },
    f255: {
        fontFamily: font255,
        fontSize: 30
    },
    f256: {
        fontFamily: font256,
        fontSize: 30
    },
    f257: {
        fontFamily: font257,
        fontSize: 30
    },
    f258: {
        fontFamily: font258,
        fontSize: 30
    },
    f259: {
        fontFamily: font259,
        fontSize: 30
    },
    f260: {
        fontFamily: font260,
        fontSize: 30
    },
    f261: {
        fontFamily: font261,
        fontSize: 30
    },
    f262: {
        fontFamily: font262,
        fontSize: 30
    },
    f263: {
        fontFamily: font263,
        fontSize: 30
    },
    f264: {
        fontFamily: font264,
        fontSize: 30
    },
    f265: {
        fontFamily: font265,
        fontSize: 30
    },
    f266: {
        fontFamily: font266,
        fontSize: 30
    },
    f267: {
        fontFamily: font267,
        fontSize: 30
    },
    f268: {
        fontFamily: font268,
        fontSize: 30
    },
    f269: {
        fontFamily: font269,
        fontSize: 30
    },
    f270: {
        fontFamily: font270,
        fontSize: 30
    },
    f271: {
        fontFamily: font271,
        fontSize: 30
    },
    f272: {
        fontFamily: font272,
        fontSize: 30
    },
    f273: {
        fontFamily: font273,
        fontSize: 30
    },
    f274: {
        fontFamily: font274,
        fontSize: 30
    },
    f275: {
        fontFamily: font275,
        fontSize: 30
    },
    f276: {
        fontFamily: font276,
        fontSize: 30
    },
    f277: {
        fontFamily: font277,
        fontSize: 30
    },
    f278: {
        fontFamily: font278,
        fontSize: 30
    },
    f279: {
        fontFamily: font279,
        fontSize: 30
    },
    f280: {
        fontFamily: font280,
        fontSize: 30
    },
    f281: {
        fontFamily: font281,
        fontSize: 30
    },
    f282: {
        fontFamily: font282,
        fontSize: 30
    },
    f283: {
        fontFamily: font283,
        fontSize: 30
    },
    f284: {
        fontFamily: font284,
        fontSize: 30
    },
    f285: {
        fontFamily: font285,
        fontSize: 30
    },
    f286: {
        fontFamily: font286,
        fontSize: 30
    },
    f287: {
        fontFamily: font287,
        fontSize: 30
    },
    f288: {
        fontFamily: font288,
        fontSize: 30
    },
    f289: {
        fontFamily: font289,
        fontSize: 30
    },
    f290: {
        fontFamily: font290,
        fontSize: 30
    },
    f291: {
        fontFamily: font291,
        fontSize: 30
    },
    f292: {
        fontFamily: font292,
        fontSize: 30
    },
    f293: {
        fontFamily: font293,
        fontSize: 30
    },
    f294: {
        fontFamily: font294,
        fontSize: 30
    },
    f295: {
        fontFamily: font295,
        fontSize: 30
    },
    f296: {
        fontFamily: font296,
        fontSize: 30
    },
    f297: {
        fontFamily: font297,
        fontSize: 30
    },
    f298: {
        fontFamily: font298,
        fontSize: 30
    },
    f299: {
        fontFamily: font299,
        fontSize: 30
    },
    f300: {
        fontFamily: font300,
        fontSize: 30
    },
    f301: {
        fontFamily: font301,
        fontSize: 30
    },
    f302: {
        fontFamily: font302,
        fontSize: 30
    },
    f303: {
        fontFamily: font303,
        fontSize: 30
    },
    f304: {
        fontFamily: font304,
        fontSize: 30
    },
    f305: {
        fontFamily: font305,
        fontSize: 30
    }
})

export default HomeScreen;