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

function Loi(props) {
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
          <Text>سياسة الإسترجاع</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            مرحباً بك في موقع www.Mushtryati.com (الإلكتروني ("الموقع") الذي
            تمتلكه وتُديره مؤسسة شعاع النجمتين للتجارة ، وهي مؤسسة مسجلة في
            المملكة العربية السعودية (السعودية) بموجب سجل تجارى رقم
            1010236600ويقع مكتب رقم 482 ، مركز الصالحية للكمبيوتر و الحاسبات
            طريق الملك فهد . الرياض المملكة العربية السعودية{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            تنص شروط الاستخدام هذه وجميع السياسات والشروط الإضافية (في حال
            تطبيقها) الموجودة على الموقع على الشروط التي نقدمها لك للدخول الى
            واستخدام الموقع والخدمات والتطبيقات، بما في ذلك تطبيق الهاتف الجوال
            الخاصة بنا (ويُشار إليها مجتمعة بـ"الخدمات"). يمكنك معرفة جميع
            السياسات والشروط الإضافية من هنا www.Mushtryati.com ("الوثائق
            القانونية"). تُدرج تلك الوثائق القانونية بالإشارة إليها في شروط
            الاستخدام الماثلة.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            حال وصولك و/ أو تسجيلك و/ أو استمرارك في استخدام الخدمات أو الوصول
            إليها، فأنت توافق على الالتزام بشروط الاستخدام هذه والوثائق
            القانونية بأثر فوري.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            ان شروط الاستخدام هذه والوثائق القانونية خاضعة للتعديل من قبلنا في
            اي وقت. إن استمرار استخدامك للموقع بعد نشر أي تغيير يعني موافقتك على
            شروط الاستخدام هذه والوثائق القانونية التي تم تعديلها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>نُبذة عن الموقع</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            يعد هذا الموقع منصة للتجارة الإلكترونية التي تتيح للمستخدمين من
            المؤسسات التجارية عرض وبيع المنتجات، كما يتيح للشركات والأفراد شراء
            مجموعة متنوعة من المنتجات. نحتفظ بحق تقديم خدمات جديدة وتحديث أي من
            الخدمات أو سحبها، وفقاً لتقديرنا الخاص دون اية مسؤولية.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>شروط التسجيل</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. يحق لك التسجيل كمشترٍ أو بائع والاستفادة من الخدمات إذا توفرت
            لديك معايير الاهلية التالية:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>للمشترين:</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            أن تكون بالغاً السن القانونية لتتمكن من شراء المنتجات في بلد إقامتك.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            أن تكون قادراً على تقديم عنوان في الإمارات العربية المتحدة أو في
            المملكة العربية السعودية لتسليم المنتجات.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>للبائعين:</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            {" "}
            . أن يكون لديك شركة تجارية مسجلة وفقاً لقوانين الدولة الخاصة بك.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>i. أن يكون لديك ترخيص تجاري سارٍ.</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            ii. أن يمكنك تقديم ما يثبت تفويض الأفراد الذين يقومون بالتسجيل في
            الموقع أو باستخدامه.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            iii. تقديم إثبات الهوية للشخص المفوض.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>iv. تقديم بيانات مصرفية داعمة.</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            v. تقر وتوافق على أنه قد تنطبق بعض المتطلبات الإضافية لبعض الفئات من
            المنتجات.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. للتسجيل على الموقع، سنحتاج إلى تقديم بعض المعلومات، ولن يتم قبول
            تسجيلك في الموقع إذا لم يتم تقديم المعلومات اللازمة لنا. لدينا الحق
            في رفض أي من عمليات التسجيل دون إبداء الأسباب. كما يحق لنا أيضاً
            القيام بعمليات التحقق اللازمة للتأكد من هويتك ومتطلبات التسجيل.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. وبمجرد الانتهاء من التسجيل بنجاح، يستمر التسجيل الخاص بك لفترة
            غير محددة خاضعاً لاحتمال تعليقه أو إلغائه وفقاً للبند رقم 6 من شروط
            الاستخدام هذه.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>2. الالتزامات الخاصة بك</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. عند استخدامك للخدمات أو وصولك إليها، فأنت توافق على ما يلي:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. مسؤوليتك عن الحفاظ على الخصوصية وتقييد الوصول إلى الحساب الخاص بك
            واستخدامه هو وكلمة المرور، والموافقة على تحمل مسؤولية جميع الأنشطة
            التي تتم باسم الحساب الخاص بك وكلمة المرور الخاصة بك.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. الموافقة على إخطارنا فورا عن أي استخدام غير مصرح به لكلمة المرور
            أو الحساب الخاص بك أو أي خرقٍ آخر لمعايير الاستخدام الآمن للموقع.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. تقديم المعلومات الكاملة والحقيقية والدقيقة والحالية عن نفسك وعن
            استخدامك للخدمات كما هو محدد من قبلنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            4. عدم الإفصاح للغير (باستثناء ما يلزم أو ما هو محدد من قبلنا) عن
            معلومات المستخدم المقدمة لك.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            5. التعاون مع الطلبات الصادرة عنا للحصول على معلومات إضافية فيما
            يتعلق بأهليتكك واستخدامك لخدماتنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. عند استخدامك للخدمات أو وصولك إليها، فأنت توافق على أنك لن تقوم
            بما يلي:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. نشر أو إدراج أو تحميل أي من المحتويات أو المواد غير المناسبة أو
            المحظورة في موقعنا، بما في ذلك:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            {" "}
            . المحتوى أو المواد غير الملائمة أخلاقياً أو دينياً بأي شكلٍ من
            الأشكال.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            i. المحتوى أو المواد التي لا تتوافق مع القانون المحلي والشريعة
            الإسلامية والقواعد والأخلاق والقيم والآداب والتقاليد.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            ii. المحتوى أو المواد التي قد تُهدد الأمن القومي.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            iii. المحتوى أو المواد التي قد تروج أو تندرج في إطار المقامرة.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            iv. الأوراق المالية، بما في ذلك الأسهم أو السندات أو الصكوك أو أي من
            الأوراق المالية الأخرى أو أي من الأصول.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            v. المخلوقات الحية أو النافقة و/ أو أي جزء من أي حيوان تم الاحتفاظ
            به أو الحفاظ عليه بأي من الوسائل الصناعية أو الطبيعية.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>vi. أي من الأسلحة.</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            vii. الخمر ومنتجات التبغ والمخدرات والمواد المؤثرة على العقل والمواد
            المنومة والمسكرات بأي من أنواعها والأدوية الطبية.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            viii. حسب علمك، المواد التي تكون معيبة أو زائفة أو تالفة أو مضللة أو
            قد تسبب ضررا عند استخدامها بشكلٍ طبيعي لمصلحة مستخدم آخر للموقع أو
            لصحته.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>ix. قسائم غير قابلة للتحويل.</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>x. المواد الكيميائية.</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. نشر المواد التي لا يحق لك مشاركة الرابط الخاص بها أو إدراجها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. نشر المواد المزيفة أو المسروقة.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            4. خرق القانون أو التحايل عليه، أو خرق أي من حقوق الغير أو الأنظمة
            الخاصة بنا أو السياسات أو خرق القرارات المتعلقة بحالة الحساب الخاص
            بك.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            5. استخدام الخدمات إذا لم تعد تستوفي معايير أهلية الاستخدام أو كنتَ
            غير قادر على إبرام عقود ملزمة قانونياً أو تم ايقاف حسابك بشكلٍ مؤقت
            أو لأجلٍ غير مسمى.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            6. عدم تسديدك ثمن المنتجات التي قمت بشرائها، إلا إذا كان هناك سبب
            قانوني يؤيد ذلك في أي من السياسات الخاصة بنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            7. عدم تسليم العملاء المنتجات التي قمت ببيعها (إذا انطبق ذلك)، إلا
            إذا كان هناك سبب قانوني يؤيد موقفك ومذكور في أي من السياسات الخاصة
            بنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            8. استخدام معلومات الاتصال المقدمة لك أثناء عقد الصفقة عبر الموقع
            لمحاولة زيادة مبيعاتك خارج حدود الموقع أو عبر مواقع أخرى.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>9. التلاعب في سعر أي من المنتجات.</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            10. التدخل في القوائم الخاصة بالمستخدمين الآخرين.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            11. اتخاذ أي إجراء من شأنه أن يقلل من تقييم الموقع وأنظمة التصنيف.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            12. نشر المحتوى الخاطئ أو غير الدقيق أو المضلل أو المخادع أو
            التشهيري أو ما شابه.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            13. نقل الحساب الخاص بك إلى طرف آخر دون الحصول على موافقة خطية مسبقة
            من قبلنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            14. نشر الرسائل أو المراسلات الإلكترونية غير المرغوب فيها أو ما شابه
            ذلك.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            15. نشر الفيروسات أو أيٍّ من التقنيات الآخرى التي قد تضر بخدماتنا أو
            بمصالح المستخدمين الآخرين أو أملاكهم.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>16. خرق:</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            {" "}
            . القوانين الخاصة بحقوق النشر، العلامة التجارية، براءة الاختراع،
            الأخلاق، الإعلان، قاعدة البيانات، و/ أو أي من حقوق الملكية الفكرية
            (ويُشار إليها مجتمعة بـ "حقوق الملكية الفكرية") التي تتعلق بنا أو
            المرخصة لنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            i. أي من حقوق الملكية الفكرية التي تتعلق بالغير.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            17. جمع المعلومات الخاصة بالمستخدمين دون الحصول على موافقتهم.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            18. أو التحايل على أي من الإجراءات التقنية التي نتبعها لتقديم
            الخدمات.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>3. حقوق الملكية الفكرية</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. باستثناء الحقوق التي تم منحها صراحة وفقاً لشروط الاستخدام هذه:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. جميع المحتويات الواردة في الموقع تدخل في إطار ملكيتنا الخاصة أو
            ضمن الملكية الخاصة بمرخصينا، بما في ذلك على سبيل المثال لا الحصر
            النصوص والرسوم البيانية والشعارات والصور والمقاطع الصوتية والتنزيلات
            الرقمية والبرمجيات. فنحن (أو المرخصون لنا، وفقاً لما تقتضيه الحالة)
            نحتفظ بجميع حقوقنا، وملكيتنا ومصلحتنا بالموقع والخدمات -وذلك على
            سبيل المثال لا الحصر- بجميع حقوق الملكية الفكرية الواردة ضمن شروط
            الاستخدام هذه.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. وأيضاً جميع الحقوق والملكيات والمصالح لأي من المعلومات أو المواد
            أو المحتويات الأخرى التي تقدمها أنت من خلال استخدامك للخدمات
            بالإضافة الى جميع حقوق الملكية الفكرية الخاصة بك والواردة ضمن شروط
            الاستخدام هذه ستصبح ملكاً لنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. توافق على أنه لا يحق لك استخدام العلامات التجارية الخاصة بنا دون
            وجود موافقة خطية مسبقة.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. إن جميع الحقوق غير المخولة لك بشكلٍ واضح في شروط الاستخدام
            الماثلة يتم الاحتفاظ بها لنا أو للمرخصين لنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>4. الضمانات والتعهدات والإقرارات</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>1. تضمن وتتعهد وتقر بما يلي:</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. الامتثال التام للاستمرار بالعمل وفقاً للقوانين والأنظمة واللوائح
            المطبقة، بما في ذلك على سبيل المثال لا الحصر الالتزام بالتشريعات
            المتعلقة بقوانين الخصوصية وتنظيم المحتوى.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. لديك السلطة الكاملة للتعاقد وفقاً لشروط الاستخدام الماثلة، وأن
            تنفيذك التزامك بموجب شروط الاستخدام هذه لا يتعارض مع:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            {" "}
            . أي من القوانين أو القواعد أو اللوائح أو الإرشادات الحكومية التي
            تخضع لها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            i. أي من الاتفاقيات الأخرى التي كنت طرفاً فيها أو التي عليك الالتزام
            بها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. إذا قمت بإنشاء حساب أو استخدامه بالنيابة عن شركة فأنت بذلك مخول
            بالتصرف نيابة عن هذه الشركة وتضمن التزامها بالعمل بشروط الاستخدام
            الماثلة. ويُعد هذا الحساب ملكاً لهذه الشركة وتحت إدارتها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            4. أنك مالك أو مخول بمنح الحقوق والتراخيص التي منحتنا إياها وفق شروط
            الاستخدام هذه.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            5. أي محتوى قمت بتقديمه كجزء من استخدامك للخدمات ولأي من المنتجات
            التي تقوم بإدراجها، لا ينتهك حقوق الغير في أي مكان حول العالم، على
            سبيل المثال لا الحصر أي من حقوق الملكية الفكرية (سواء كانت مسجلة أم
            لا).
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. وفقاً للبند ‎5-1، فإن الخدمات تُقدم إليك على "حالتها الحالية" دون
            ضمانات أو تعهدات أو إقرارات. فنحن نخلي مسؤوليتنا عن جميع الضمانات أو
            التعهدات أو الإقرارات بجميع أشكالها، سواء الصريحة أو الضمنية أو
            الإضافية، على سبيل المثال لا الحصر جميع الضمانات أو التعهدات أو
            الإقرارات الخاصة بصلاحية المحتوى للأغراض التجارية أو ملاءمته لغرض
            محدد أو عام أو عدم مخالفته أو خرقه لأي حقوق أو كون خدماتنا آمنة أو
            خالية من العيوب أو سوف تعمل دون وجود أي عطل أو سيتم تقديمها في الوقت
            المناسب أو على العموم.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. وعلاوة على ذلك، فعلى الرغم من أننا نحاول أن نتوخى الدقة قدر
            المستطاع، فإننا لا نضمن أن تكون مواصفات المنتج أو أي محتوى آخر لأي
            خدمة دقيقاً أو كاملاً أو موثوقاً به أو حديثاً أو خالياً من الأخطاء.
            بالإضافة إلى ذلك -وبناءً على كونك مشترياً- فأنت توافق على أننا غير
            مسؤولين عن فحص أو اختبار القوائم أو محتوى الخدمات المقدمة من قبلنا
            أو من قبل الغير، وأنك لن تحاول أن تضع على عاتقنا مسؤولية أي من
            الأخطاء او العيوب في اي من القوائم. وبناءً على كونك بائعاً فإنك
            مسؤول عن مراجعة دقة المحتوى الوارد ضمن القوائم الخاصة بك وأنك لن
            تحاول أن تضع على عاتقنا أو على عاتق مقدمي المحتوى/ الكتيب مسؤولية
            وجود أخطاء أو عدم الدقة.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>5. المسؤولية والتعويضات</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. لا يوجد في شروط الاستخدام هذه ما من شأنه أن يحد أو يعف مسؤولية أي
            من الأطراف عن:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. الاحتيال، بما في ذلك التدليس، الذي يقوم به هذا الطرف.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. الوفاة أو الإصابة الشخصية نتيجة لإهمال هذا الطرف.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. أي من المسؤوليات الأخرى التي لا يمكن حدها أو الإعفاء منها وفقاً
            للقانون المعمول به.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. وفقاً للبند ‎5-1، ففي جميع الأحوال لن نتحمل نحن وشركتنا الأم
            وشركاتنا الفرعية والشركات التابعة ومديرونا ومديروهم والمسؤولون
            والوكلاء والموظفون والموردون والمقاولون من الباطن أو المرخصين -سواء
            بناءً على دعوى أو مطالبة في العقد أو ضرر أو إهمال أو خرق واجب قانوني
            أو خرق لشروط الاستخدام هذه- مسؤوليةَ أي دعوى خاصة بخسارة الأرباح أو
            فقد البيانات أو المعلومات أو عطل في العمل أو أي خسارة مالية أو أي
            أضرار خاصة أو غير مباشرة أو عرضية حتى وإن تم إخطارنا نحن أو الشركات
            التابعة أو المديرين أو المسؤولين أو الوكلاء أو الموظفين أو المرخصين
            أو الموردين أو المقاولين من الباطن باحتمال وجود مثل هذه الأضرار.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. بالإضافة إلى الحد الذي يسمح به القانون المعمول به، فنحن (بما في
            ذلك، الشركة الأم أو الشركات الفرعية أو الشركات التابعة أو المديرون
            أو المسؤولون أو الوكلاء أو الموظفون أو الموردون أو المقاولون من
            الباطن أو المرخصين) لن نتحمل المسؤولية، كما أنك تقر بأنك لن تضع على
            عاتقنا مسؤولية حدوث أي ضرر أو فقدان ناتجة بشكلٍ مباشر أو غير مباشر
            عن:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. المحتوى أو المعلومات الأخرى التي تقدمها عند استخدامك للخدمات.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. استخدامك للخدمات أو عدم قدرتك على استخدامها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. التسعير أو الشحن أو التنسيق أو أيٍّ من الإرشادات المقدمة من
            قبلنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            4. التأخر أو الانقطاع في تقديم الخدمات.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            5. الفيروسات أو غيرها من البرامج الضارة التي وجدت من خلال الوصول إلى
            الخدمات.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            6. وجود أخطاء في الخدمات أو أعطال أو عدم دقة بأي شكل من الأشكال.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            7. تلف الجهاز الخاص بك من خلال استخدام المنتجات التي تم بيعها على
            الموقع أو من خلال خدماتنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            8. المحتوى أو أفعال أو امتناع عن فعل الغير المستخدمين لخدماتنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            9. التعليق أو أي اجراءات أخرى نتخذها متعلقة باستخدامك للخدمات.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            10. الفترة الزمنية التي تظهر فيها القوائم الخاصة بك في نتائج البحث
            أو طريقة ظهورها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            11. حاجتك إلى تعديل الممارسات أو المحتوى أو السلوك أو خسارتك أو عدم
            قدرتك على القيام بالأعمال التجارية نتيجة لوجود تغيرات في شروط
            الاستخدام هذه.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            4. ووفقاً للبند ‎5-1، إذا ثبت أن البند ‎5-2 أو ‎5-3 غير قابل للتنفيذ
            أو التطبيق لأي سبب من الأسباب، ، تقتصر التزاماتنا الكلية بما في ذلك
            التزام الشركة الأم أو الشركات الفرعية أو التابعة لنا ومديريها أو
            مسؤوليها أو وكلائها أو موظفيها أو مورديها أو مقاوليها من الباطن أو
            المرخصين تجاهك سواء كان ذلك نتيجة لأي دعوى أو مطالبة في العقد أو
            إهمال أو خرق لأي واجب قانوني أو بخلاف ذلك ناتجة عن شروط الاستخدام
            هذه أو على علاقة بها، لستكون بحد اقصى، القيمة الادنى لـ:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. السعر الذي تم بيع المنتج به على الموقع وأسعار الشحن الأصلية.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. مبلغ الرسوم المتنازع عليها، على ان لا تتجاوز قيمتها إجمالي قيمة
            الرسوم التي تم تسديدها إلينا خلال فترة الأثني عشر(12) شهراً التي
            تسبق الإجراء الذي أدى إلى المسؤولية.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>3. ثلاثمائة (300) ريال سعودى .</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            5. توافق على تعويضنا وإبراء ذمتنا، بما في ذلك تعويض وإبرام ذمة
            شركتنا الأم والشركات التابعة لها وفروعها والمديرين والمسؤولين
            والوكلاء والموظفين والموردين والمقاولين من الباطن والمرخصين
            المتعلقين بشركتنا أو بالشركة الأم والشركات الفرعية والتابعة من وضد
            أي خسائر وأضرار ونفقات (بما في ذلك الرسوم القانونية وأتعاب المحامين
            ) ("المطالبات") التي تنشأ عن:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. أي ادعاءات أو مطالبات قدمها الغير نتيجة لاستخدامك الخدمات.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. انتهاك أي من الأحكام الواردة في شروط الاستخدام هذه، بما في ذلك
            على سبيل المثال لا الحصر أي من الضمانات والتعهدات والإقرارات.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. انتهاك أي من القوانين المعمول بها، على سبيل المثال لا الحصر
            قوانين حماية البيانات أو قوانين مكافحة البريد الإلكتروني العشوائي.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            4. الطريقة التي تقوم من خلالها استخدام خدماتنا، على سبيل المثال لا
            الحصر المحتوى الذي تقوم بنشره، والمنتجات التي تقوم بإدراجها أو
            العلامات التجارية الخاصة بك التي تنتهك أياً من حقوق الملكية الفكرية
            للغير أو أن يكون المحتوى الخاص بك به افتراءات أو هجاء أو قذف أو
            انتهاك لأي من الحقوق الأخرى (بما في ذلك حقوق الخصوصية) المتعلقة
            بالغير (بما في ذلك مستخدمي المواقع الأخرين).
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>6. التعليق أو الإنهاء أو الإلغاء</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. مع عدم المساس بأيٍّ من الحقوق أو التعويضات أو دون أي مسؤولية
            تجاهك، يحق لنا حد أو تعليق أو سحب إمكانية دخولك او استخدامك للخدمات
            أو إلغاء طلب أي منتجات و/ أو حذف المحتوى المقدم من قبلك وفقاً
            لتقديرنا الخاص. وتجنبا للشك، سيتم رد أي مبالغ تم دفعها واستلامها من
            قبلنا فيما يتعلق بطلب منتجات تم إلغائه.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            7. الإبلاغ عن انتهاك شروط الاستخدام:
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. نلتزم بضمان امتثال المنتجات والمحتوى الوارد في الموقع لشروط
            الاستخدام هذه. إذا كان المحتوى الوارد لا يتناسب مع شروط الاستخدام
            هذه يُرجى إخطارنا وسنقوم نحن بالتحقيق في الأمر.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>8. أحكام عامة</Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            1. القانون المطبق: إن شروط الاستخدام هذه وأياً من الحقوق أو الواجبات
            غير التعاقدية ذات الصلة يجب إخضاعها وتفسيرها وفقاً لقوانين المملكة
            العربية السعودية.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            2. حل النزاعات: إذا كان لديك أي من المشكلات الخاصة بخدماتنا يُرجى
            الاتصال بنا‎. وسنعمل جاهدين على حل المشكلة التي تواجهك في أقرب فرصة
            ممكنة. يتم تسوية أي من النزاعات أو الخلافات المتعلقة بشروط الاستخدام
            هذه، بما في ذلك أي حقوق أو واجبات غير تعاقدية ذات صلة عن طريق
            التحكيم وفقاً لقواعد التحكيم الخاصة بـ DIFC-LCIA من قبل محكم واحد
            وتكون اللغة الانكليزية / العربية هي لغة التحكيم.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            3. حقوق الغير: الشخص الذي لا يُعد جزءاً من شروط الاستخدام هذه ليس
            لديه أي حق في تنفيذ أي من شروطها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            4. علاقة الأطراف: لا يوجد في شروط الاستخدام هذه ما يمكن للأطراف أو
            للغير تأويله أو تفسيره ليفسر العلاقة بيننا على أنها بين شركاء أو
            وكلاء أو يوجِد مشروعاً مشتركاً بين الأطراف، ولكنه من المفهوم والواضح
            أن كل الأطراف في الاتفاق هي أطراف مستقلة .
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            5. التأكيدات الإضافية: تقوم الأطراف بالتصرفات اللازمة أو الترتيب
            لاتخاذ التصرفات اللازمة وتحرير المستندات وغيرها من الأمور التي تقع
            ضمن سلطتها من أجل إنفاذ شروط الاستخدام هذه والتحقق من العمل بها، بما
            في ذلك على سبيل المثال لا الحصر مساعدة كل طرف على الالتزام بالقانون
            المعمول به.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            6. التنازل: تلتزم شروط الاستخدام هذه بضمان تحقيق الفائدة للأطراف
            ولخلفائهم المعنيين والمُفوضين رسمياً. توافق على أنك لن تقوم بالتنازل
            عن أو نقل شروط الاستخدام أو أي من الحقوق أو الواجبات الخاصة بك
            والمتعلقة بشروط الاستخدام هذه، سواء كان ذلك بشكلٍ مباشر أو غير
            مباشر، دون الحصول مسبقاً على موافقة خطية من قبلنا.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            7. مجمل الاتفاق: إن شروط الاستخدام هذه والوثائق المشار إليها أو
            المدرجة في شروط الاستخدام تمثل مجمل الاتفاق بين الأطراف فيما يتعلق
            بموضوع الاتفاقية وتسمو على وتحجب جميع الاتفاقيات والمفاوضات
            والإقرارات السابقة، الخطية أو الشفهية، ذات الصلة بالموضوع. باستثناء
            ما هو محدد في شروط الاستخدام والوثائق المشار إليها أو المدرجة في
            شروط الاستخدام الماثلة فلا توجد أي شروط أو إقرارات أو ضمانات أو
            تعهدات أو اتفاقيات بين الأطراف سواء كان ذلك مباشراً أو غير مباشر أو
            جماعياً أو صريحاً أو ضمنياً.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            8. التعديلات: لا يحق إجراء أي تعديل على شروط الاستخدام هذه أو إدخال
            أي إضافة أو تكملتها. نحن نحتفظ بالحق في إدخال أي تعديل أو تغيير أو
            إضافة أو إكمال شروط الاستخدام هذه في أي وقت أو من وقتٍ لآخر. وسنقوم
            بنشر النسخة الحالية لشروط الاستخدام على الموقع وستكون سارية المفعول
            عند نشرها على الموقع أو بناء على الموعد المحدد من جانبنا بصفته
            "تاريخ السريان" (إن وجد). إن استخدامك المستمر للخدمات في حال حدوث أي
            تغييرات يُعد موافقة منك على الالتزام بشروط الاستخدام المعدلة.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            9. قابلية الفصل بين البنود: إذا ما تم اعتبار أي من أحكام شروط
            الاستخدام هذه ملغًى من قبل أيٍّ من المحاكم المختصة أو غير قانوني أو
            غير معمول به فإنه يتم إلغاء هذا لبند من شروط الاستخدام هذه وتستمر
            باقي الشروط والأحكام قائمة سارية نافذة طالما ظل الجوهر القانوني
            والاقتصادي للصفقات التي تمت تحت شروطها قائماً دون أي تأثير معاكس على
            أطرافها.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            10. القوة القاهرة: لا يتحمل أي طرف مسؤولية وجود الخسارة أو الضرر أو
            التأخير أو عدم الوفاء نتيجة للأعمال الخارجة عن السيطرة لأي من
            الأطراف سواء كان ذلك العمل يمكن توقعه (مثل القضاء والقدر والإجراءات
            الصادرة عن السلطات التشريعية أو القضائية أو التنظيمية لأي من الحكومة
            الفيدرالية أو المحلية أو السلطات القضائية أو الإجراءات التي يقوم بها
            أي من المقاولين من الباطن التابعين لنا أو أي طرف ثالث مورد البضائع
            أو الخدمات لنا أو الاضطرابات العمالية أو الانقطاع الكامل للتيار
            الكهربائي أو المقاطعة الاقتصادية).
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            11. عدم التنازل: إن التنازل عن أي من الأحكام الواردة في شروط
            الاستخدام لا يُعد تنازلاً عن أي من الأحكام الأخرى (المشابهة أو غير
            المشابهة)، ولا يعد أي تنازل آخر تنازلاً مستمراً عن أي من الأحكام
            المعنية، ما لم ننص على ذلك صراحة وخطياً.
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            12. التواصل: يمكنك التواصل معنا عبر البريد الإلكتروني، أو عبر مواقع
            التواصل الإجتماعي الخاص بنا ، أو المحادثة المباشرة على الموقع، أو
            الاتصال بمركز الاتصال الخاص بنا على الرقم XXXXXXXXX (في الإمارات
            العربية المتحدة) أو XXXXXXXXXXXX في )المملكة العربية السعودية(
          </Text>
        </View>
        <View>
          <Text style={styles.titleNew}>
            13. استمرار النفاذ: جميع الأحكام التي يُنص على أنها تظل سارية أو
            التي تسري بطبيعتها بعد إنهاء التعاقد تظل نافذة المفعول بعد إنهاء أو
            تعليق عضويتك في الموقع.
          </Text>
        </View>

        <View style={{ marginBottom: 150 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Loi;

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
  text11: {
    color: "black",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
    textAlign: "center",
    marginBottom: 18,
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
