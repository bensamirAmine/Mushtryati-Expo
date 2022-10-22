<ScrollView
  showsVerticalScrollIndicator={false}
  style={{ height: windowHeight }}
>
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      ></Image>
      <Text style={styles.logotext}>مرحبا بك قم بتسجيل الدخول</Text>
    </View>
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, hundleSubmit, values }) => (
          <>
            <View style={styles.searchContainer}>
              <Octicons
                style={{
                  marginRight: 20,
                }}
                name="mail"
                size={23}
              />

              <TextInput
                placeholder="البريد الإلكتروني"
                keyboardType="email-address"
                style={styles.textInput}
              />
            </View>
            <View style={styles.searchContainer}>
              <Octicons
                style={{
                  marginRight: 20,
                }}
                name="lock"
                size={23}
              />

              <TextInput
                placeholder="كلمة المرور"
                secureTextEntry={hidePassword}
                style={styles.textInput}
              />
              <TouchableOpacity onPress={() => sethidePassword(!hidePassword)}>
                <Ionicons
                  style={{
                    marginLeft: 20,
                  }}
                  name={hidePassword ? "md-eye-off" : "md-eye"}
                  size={23}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  paddingRight: 10,
                  marginTop: 5,
                  marginBottom: 20,
                }}
              >
                نسيت كلمة المرور؟
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={{ color: "white", textAlign: "center" }}>
                تسجيل دخول
              </Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity style={styles.regBtn}>
              <Text
                onPress={() => navigation.navigate("Signup")}
                style={{ color: "white", textAlign: "center" }}
              >
                تسجيل حساب جديد
              </Text>
            </TouchableOpacity>

            <Image
              style={styles.scan}
              source={require("../assets/images/scan.png")}
            ></Image>
          </>
        )}
      </Formik>
    </View>
  </KeyboardAvoidingView>
</ScrollView>;
