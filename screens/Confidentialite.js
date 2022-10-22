import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../config/colors";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Confidentialite(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: windowHeight }}
      >
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={28}
            onPress={() => navigation.goBack()}
          />
          <View></View>
        </View>

        <View style={styles.logoContainerTop}>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo.png")}
          ></Image>
          <Text>سياسة الخصوصية</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>مقدمة</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            1. تعنى (إتفاقية سرية المعلومات) لدينا بطريقة جمعنا للبيانات و طريقة
            حماية المعلومات الشخصية للمستخدمين، وهي بغاية الأهمية للإطلاع و
            مراجعة تفاصيل هذه الإتفاقية
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            2. نحن لا يعنينا أي معلومات شخصية لشخص محدد بعينه ، و إنما يتم جمع
            المعلومات الشخصية من الراغبين بإستخدام موقع مشترياتي.كوم
            mushtryati.com او صفحات الانترنت المرتبطة (بما في ذلك وغير مقتصر على
            بيعك وشرائك لبضائع ,او عن مشاركتك في مزادات,او حين تتصل هاتفيا او
            بواسطة البريد الالكتروني بفريق مركز دعم المستخدمين لدينا). و بمجرد
            تزويدك لنا بمعلوماتك الشخصية تكون قد فوضتنا بمعالجة هذه المعلومات
            وفق بنود وشروط (إتفاقية سرية المعلومات) .
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            3. قد نلجأ الى تعديل في (إتفاقية سرية المعلومات) في اي وقت, وذلك بعد
            الإعلان عن هذا التعديل بنشر النسخة المعدلة على الموقع. وتكون النسخة
            المعدلة من (إتفاقية سرية المعلومات) سارية المفعول اعتبارا من تاريخ
            نشرها. في اعقاب النشر يعتبر استمرارك في استخدام الموقع إلتزاما منك
            بالشروط والبنود الواردة في النسخة المعدلة لطريقة معالجتنا وتعاملنا
            مع معلوماتك الشخصية التي كنت قد زودتنا بها. ونأمل منكم الإطلاع من
            حين لأخر على إعلانات إدارة مشترياتي.كوم و التي قد يكون لها علاقة
            بهذا الإتفاقية (إتفاقية سرية المعلومات) .
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            4. نأمل منكم الإطلاع من حين لأخر على إعلانات إدارة مشترياتي.كوم و
            التي قد يكون لها علاقة بهذا الإتفاقية (إتفاقية سرية المعلومات) .
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            يغطي (إتفاقية سرية المعلومات) الأنشطة التالية والتي يرد تفصل لها في
            البنود إدناه :
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            1. جمعنا وإحتفاظنا بمعلوماتك الشخصية التي تعاملت بها أو زودتنا بها
            أو قمت بعرضها أو تعديلها
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            2. إستخدامنا لمعلوماتك الشخصية ومراجعتها وتعديلها حسب الحاجة
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            3. استخدامك لمعلوماتك الشخصية ومعلومات المستخدمين الاخرين
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            4. إستخدام، دخول، تصفح، وتعديل معلوماتك الشخصية
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            5. ادوات الاتصال مع اطراف ثالثة عبر الانترنت
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            6. برمجيات التصفح المستخدمة على جهازك الشخصي
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            7. لا لرسائل الكترونية مضللة او مخادعة
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>8. حماية معلوماتك الشخصية</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            9. كيف لك الاتصال بنا للاستفسار عن (إتفاقية سرية المعلومات)
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            جمعنا وإحتفاظنا بمعلوماتك الشخصية التي تعاملت بها أو زودتنا بها أو
            قمت بعرضها أو تعديلها
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            1. كجزء من التسجيل على الموقع سوف يطب منك تزويدنا بمعلومات شخصية
            محددة,مثل اسمك, عنوان الشحن اليك, بريدك الالكتروني و/أو رقم هاتفك
            ومعلومات مشابهة اخرى, وبعض المعلومات الاضافية عنك مثل تاريخ ميلادك
            أو اي معلومات محددة لهويتك. إضافة إلى ذلك وبهدف توثيقنا لهويتك قد
            نحتاج منك ان تقدم لنا اثبات ساري المفعول يثبت هويتك (مثلا نسخة عن
            جواز سفرك, تاشيرة او تصريح الاقامة, الهوية الوطنية و/ أو رخصة
            القيادة).
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            2. قد نحتاج ايضا جمع معلومات مالية محددة منك, مثلا بطاقتك
            الائتمانيةو/أو تفاصيل حسابك المصرفي حتى يتم إضافتها إلى معلومات
            حسابك في الموقع، و ستسخدم هذه المعلومات المالية لاهداف الفوترة
            ولإتمام عملياتك في الموقع .
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            3. بعد تسجيلك في الموقع, ينبغى عليك عدم نشر اي معلومات شخصية (بما في
            ذلك اي معلومات مالية) على اي جزء من الموقع, باستثناء جزء" إدارة
            الحساب" وهذا من شأنه حمايتك من امكانية تعرضك للاحتيال او سرقة
            معلومات هويتك. كما ان نشرك لأي من معلوماتك الشخصية على اي جزء من
            الموقع باستثناء"حسابي" قد يعتبر مخالفة لهذه الإتفاقية قد يتسبب بأخذ
            إجراء بحق عضويتك بالموقع .
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            4. سوف يتم تسجيل معلومات عملياتك و إنشطتك في الموقع سواء كانت عملية
            شراء أو بيع أو عرض سلع، أو سحب مبالغ أو إيداع مبالغ أو غيرها من
            الأنشطة الخاصة بعملياتك في الموقع
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            5. الرجاء ملاحظة اننا قد نستخدم عنوان برتوكول الانترنت خاصتك او (IP)
            (وهو عبارة عن رقم مميز يعطى لمقدم خدمة الانترنت لك او (ISP) بهدف
            تحليل انماط نشاطاتك التي تمارسها على الموقع, وبالتالي تحسين ادارتك
            على الموقع. وقد نجمع ايضا معلوماتك عن تفاصيل عمليات التصفح
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            6. قد نجمع معلومات اضافية منك او عنك بطرق اخرى لم يتم هنا ذكر
            تفاصيلها, مثل تسجيل المكالمات الهاتفية مع موظفي مركز العناية
            بالمستخدمين او من خلال اجاباتك على استبياناتنا .وقد نجمع نجمع
            معلومات لاهداف احصائية حينها تبقى اسماء اصحاب المعلومات مجهولة.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>استخدامنا لمعلوماتك الشخصية</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            1. نستخدم معلوماتك الشخصية فقط لتقديم خدمات ودعم من فريق الزبائن,
            ويهدف قياس مستوى خدماتنا وتحسينها لك, ومنع النشاطات غير القانونية,
            وتنفيذ بنود اتفاقيتنا معك، اضافة الى تذليل العوائق, وجمع الرسوم,
            وتزويدك برسائل الكترونية ترويجية, وكذلك من اجل توثيق المعلومات التي
            زودتنا بها مع اطراف ثالثة , مثلا قد نلجأ الى الاشتراك في بعض من
            معلوماتك الشخصية مع البنوك او التفويض لبطاقات الائتمان لمعالجةوتوثيق
            خدمات مع اطراف ثالثة لاهداف تتعلق بزيادة مستوى الأمن .
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            2. برغم حرصنا للمحافظة على سرّيتك ,الا اننا قد نحتاج الى الافصاح عن
            معلوماتك الشخصية لاجهزة تنفيذ القانون, الهيئات الحكومية او اطراف
            ثالثة نكون ملزمين بفعل ذلك باوامر من المحكمة اوغيرها من الدوائر
            القانونية, لنكون ملتزمين ببنود القانون, عند اعتقادنا ان الافصاح عن
            معلوماتك الشخصية ربما يقي من أذى جسدي او خسارة مالية, او للاخبار عن
            نشاط مشبوه او للتحقيق في امكانية انتهاك لبنود وشروط اتفاقية
            المستخدم.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            3. في حال تم بيع مشترياتي دوت كوم اف زد- ال ال سي, او اي من مؤسساته
            الفرعية او اصوله التجارية قد نفصح عن معلوماتك الشخصية للمشتري
            المحتمل, وذلك بهدف استمرار نشاط الموقع.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            4. اضافة الى ذلك فان المعلومات المتعلقة بالبضائع التي تقوم بشرائها
            او بيعها,او المزادات التي تشارك فيها على الموقع, هذه المعلومات قد
            تتضمن تفاصيل بخصوص هوية المستخدم, التغذية المسترجعة والملاحظات
            المتعلقة باستخدامك للموقع. غير ذلك فاننا سوف نكشف عن معلوماتك
            الشخصية لطرف ثالث بعد أخذ اذن واضح منك.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            5. نحن لا نبيع ولا نؤجر لطرف ثالث اي من معلوماتك الشخصية ضمن نطاق
            عملنا التجاري العادي, وسوف نشرك اخرين في معلوماتك الشخصية فقط وفق ما
            جاء في (إتفاقية سرية المعلومات) هذا.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            6. بمجرد تسجيلك في الموقع تعتبر أنك أعطيتنا تفويضا واضحا لتسليمك
            رسائل إلكترونية ترويجية حول خدماتنا, إضافة الى رسائل إلكترونية بخصوص
            التغيرات,والملامح الجديدة على الموقع , فلو انك في اي وقت قررت بعدم
            رغبتك في تلقي مثل هذه الرسائل,ماعليك سوى إختيار الرابط الخاص بإيقاف
            إرسال هذه الرسائل إلى عنوانك البريدي والمتوفر في اسفل اي من هذه
            الرسائل الاكترونية او الذهاب الى جزء "حسابي" على الموقع.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            استخدامك لمعلوماتك الشخصية ومعلومات المستخدمين الاخرين
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            1. قد يكون الاعضاء في حاجة للمشاركة في المعلومات الشخصية (بما في ذلك
            المعلومات المالية) مع بعضهم البعض,بهدف استكمال عمليات على الموقع.
            عليك ان تحترم في جميع الاوقات سرية الاعضاء الاخرين في الموقع.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            2. نحن لا نضمن سرية معلوماتك حين تشارك بها اعضاء اخرين,لذا عليك طلب
            معلومات حول مستوى السرية وعقود الأمان من اي اعضاء اخرين على الموقع
            قبل مباشرتك و تزويدهم بأي بيانات أو معلومات مالية أو شخصية، وبإمكانك
            الرجوع لموظفي مركز خدمة العملاء للتأكد من صلاحية المطلوب و أمانه.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            3. عقد السرية هذا لا يغطي كشفك لمعلوماتك الشخصية لعضو في موقع اخر.
            انت موافق على استخدام اي معلومات شخصية تتلقاها من عضو في موقع اخر
            بغرض اتمام عملية على موقعنا, فقط لهذه العملية,وانك لن تستخدم
            المعلومات المتلقاة من عضو في موقع اخر لاي اهداف اخرى(باستثناء تفويض
            واضح من العضو في الموقع الاخر)
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            4. انت تعلم وموافق انك سوف لن تستخدم المعلومات الشخصية التي وردتك من
            الموقع عن أي عضو في موقع اخر وفق القوانين المعمول بها في هذه
            الوثيقة.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            5. نت على علم و موافق بأنه عليك إستخدام المعلومات الشخصية التي وردتك
            من المستخدمين ضمن هذا الإتفاقية
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            إستخدام، دخول، تصفح، وتعديل معلوماتك الشخصية
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            1. باستطاعتك الوصول ومراجعة معلوماتك الشخصية من خلال صفحة إدارة
            "حسابي"على الموقع, فاذا ما تغيرت معلوماتك الشخصية باي طريقة,او انك
            اعطيت معلومات غير صحيحة على الموقع,عليك تحديثها او تصحيحها حالا,اما
            من خلال عرضها على "حسابي" او من خلال الاتصال بفريق خدمة العملاء.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            2. يرجى العلم أننا سوف نحتفظ بمعلوماتك الشخصية خلال وبعد انتهائك من
            استخدام الموقع بحسب ما هو مطلوب قانونا,وذلك بهدف التغلب على العوائق
            التقنية ,ولمنع الاحتيال,وللمساعدة في اي تحقيق قانوني ولاتخاذ اي
            اجراءات اخرى ينص عليها القانون.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            الروابط مع مواقع الكترونية لاطراف ثالثة
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            1. قد يحتوي الموقع على روابط مع مواقع الكترونية اخرى, الرجاء العلم
            اننا غير مسؤولين عن مستوى الأمان أو الطرق المتبعة في المواقع الاخرى.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            2. نحن نشجعك حين تنتقل من موقعنا الى أي موقع أخر بان تبادر بقراءة
            بيانات (إتفاقية سرية المعلومات) الخاصة بهم إذا كان في نيتك اعطائهم
            معلوماتك الشخصية .
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            3. ان (إتفاقية سرية المعلومات) عندنا يطبق فقط على معلوماتك الشخصية
            اتي جمعناها على موقعنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            برمجيات التصفح المستخدمة على جهازك الشخصي
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            1. مثل العديد من مواقع الانترنت فان موقعنا يستخدم ملفات برمجية صغيرة
            يتم تثبيتها على لجزء الصلب من حاسوبك, فحين تذهب لزيارة صفحات انترنت
            معينة على المواقع, تتعرف السجل على المتصفح browser من خلال رقم فريد
            وعشوائي.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            2. كما ان السجلات" الكوكيز" التي نستخدمها لا تكشف اي من معلوماتك
            الشخصية.هذه السجلات تساعدنا في تحسين ادائك على الموقع وتعيننا على
            تفهم اي اجزاء من الموقع هي الاكثر استخداما,انت لك مطلق الحرية في
            الغاء هذه السجلات اذا أتيح لك ذلك من المتصفح,مع ان ذلك قد يفضي الى
            وقفك من استخدام الموقع.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            لا للرسائل الالكترونية التدميرية أو المخادعة
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            نحن لا نتسامح مع الرسائل التدميرية,من اجل اخبار الموقع عن اي رسائل
            الكترونية تدميرية او مخادعة, الرجاء ارسال رسالة الكترونية الى
            spam@mushtryati.com أو spoof@mushtryati.com ,فان الاتصال لارسال
            رسائل الكترونية تلحق الضرر بنا او اي محتويات سيؤدي الى نقض بنود
            اتفاقية المستخدم. فنحن نفحص الرسائل اوتوماتيكيا, وقد نلجأ الى
            الفلترة اليدوية لها لمعرفة ما اذا هناك رسائل تدميرية او فيروسات او
            هجمات ضارة واي نشاطات ماكرة اخرى او غير قانونية.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>حماية معلوماتك الشخصية</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            1. نحن نحتفظ بمعلوماتك (إتفاقية سرية المعلومات) في ملفات الكترونية
            في أيرلندا/دبلن و الولايات المتحدة, فانت حين تزودنا بمعلوماتك
            الشخصية,تكون قد منحتنا المسؤولية للاحتفاظ بهذه المعلومات في
            أيرلندا/دبلن و الولايات المتحدة, ونحن نتخذ كل الاحتياطات للمحافظة
            على معلوماتك (إتفاقية سرية المعلومات) , وذلك بعدم الوصول اليها من
            اطراف غير مسؤولة ,او استخدامها او الكشف عنها.
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            2. على اي حال فان الانترنت وسيلة غير امنة ونحن لا نضمن سرية معلوماتك
            الشخصية,وعليك ان تدخل اسم المستخدم وكلمة الدخول في كل مرة ترغب فيها
            بالدخول الى حسابك او اتمام صفقات على الموقع,اختر كلمة الدخول بدقه
            بالستخدام ارقام مميزة وحروف بمواصفات خاصة. لا تفصح عن اسم المستخدم
            وكلمة الدخول لاي احد,فاذا ما اعتقدت ان اسم المستخدم او كلمة الدخول
            قد تم كشفها, بادر بالاتصال فورا بفريق الدعم في الموقع لتغييرها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            كيف تتصل بنا للاستفسار بخصوص (إتفاقية سرية المعلومات)
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            اذا كان لديك اسئلة او اهتمامات حول جمعنا واستخدامنا لمعلوماتك
            الشخصية ,الرجاء الاتصال على فريق مركز العناية بالمستخدمين أو
            مراسلتنا على العنوان البريدي الخاص بمركز خدمة العملاء ببلدك
            مشترياتي.كوم، الإمارات، مدينة دبي للإنترنت، برج ارورا، مكتب رقم 1901
          </Text>
        </View>
        <View style={{ marginBottom: 150 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Confidentialite;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 15,
  },
  logo: {
    width: 250,
    height: 80,
    resizeMode: "contain",
  },
  logotext: {
    fontSize: 22,
  },
  logoContainerTop: {
    alignItems: "center",
    paddingTop: 10,
    flex: 1,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
    paddingBottom: 20,
  },
  text: {
    color: "grey",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
    textAlign: "right",
  },
  text1: {
    color: "grey",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 10,
    marginBottom: 100,
    flexDirection: "row",
    alignSelf: "flex-end",
    textAlign: "center",
  },
  textView: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  titleNew: {
    fontSize: 20,
    lineHeight: 25,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
    textAlign: "right",
    marginHorizontal: 15,
  },
});
