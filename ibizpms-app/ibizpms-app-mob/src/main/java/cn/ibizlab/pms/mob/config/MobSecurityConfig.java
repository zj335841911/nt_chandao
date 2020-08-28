package cn.ibizlab.pms.mob.config;

import cn.ibizlab.pms.util.helper.SecurityWhitelistHandler;
import cn.ibizlab.pms.util.security.AuthenticationEntryPoint;
import cn.ibizlab.pms.util.security.AuthorizationTokenFilter;
import cn.ibizlab.pms.util.service.AuthenticationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.context.annotation.Profile;
import org.springframework.beans.factory.annotation.Qualifier;

@Profile("mob-prod")
@Configuration
@EnableWebSecurity
public class MobSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationEntryPoint unauthorizedHandler;

    @Autowired
    private AuthenticationUserService userDetailsService;

    /**
     * 自定义基于JWT的安全过滤器
     */
    @Autowired
    AuthorizationTokenFilter authenticationTokenFilter;

    @Value("${ibiz.auth.path:v7/login}")
    private String loginPath;

    @Value("${ibiz.auth.logoutpath:v7/logout}")
    private String logoutPath;

    @Value("${ibiz.file.uploadpath:ibizutil/upload}")
    private String uploadpath;

    @Value("${zentao.file.uploadpath:ibizutil/ztupload}")
    private String ztuploadpath;

    @Value("${ibiz.file.downloadpath:ibizutil/download}")
    private String downloadpath;

    @Value("${zentao.file.downloadpath:ibizutil/ztdownload}")
    private String ztdownloadpath;

    @Value("${ibiz.file.previewpath:ibizutil/preview}")
    private String previewpath;

    @Autowired
    private SecurityWhitelistHandler whitelistHandler;  //白名单处理类

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoderBean());
    }

    @Bean
    GrantedAuthorityDefaults grantedAuthorityDefaults() {
        // Remove the ROLE_ prefix
        return new GrantedAuthorityDefaults("");
    }

    @Bean
    public PasswordEncoder passwordEncoderBean() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {

        whitelistHandler.handle(httpSecurity);  //对白名单放行。

        httpSecurity

                // 禁用 CSRF
                .csrf().disable()

                // 授权异常
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()

                // 不创建会话
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()

                // 过滤请求
                .authorizeRequests()
                .antMatchers(
                        HttpMethod.GET,
                        "/*.html",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js",
                        "/**/*.ico",
                        "/**/assets/**",
                        "/**/css/**",
                        "/**/fonts/**",
                        "/**/js/**",
                        "/**/img/**",
                        "/**/svg/**",
                        "/"
                ).permitAll()
                //放行登录请求
                .antMatchers( HttpMethod.POST,"/"+loginPath).permitAll()
                //放行注销请求
                .antMatchers( HttpMethod.GET,"/"+logoutPath).permitAll()
                // 文件操作
                .antMatchers("/" + downloadpath + "/**").permitAll()
                .antMatchers("/" + ztdownloadpath + "/**").permitAll()
                .antMatchers("/" + uploadpath).permitAll()
                .antMatchers("/" + ztuploadpath).permitAll()
                .antMatchers("/" + previewpath + "/**").permitAll()
                .antMatchers("/uaa/open/dingtalk/auth/**").permitAll()
                .antMatchers("/uaa/open/dingtalk/access_token").permitAll()
                // 所有请求都需要认证
                .anyRequest().authenticated()
                // 防止iframe 造成跨域
                .and().headers().frameOptions().disable();

        httpSecurity
                .addFilterBefore(authenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
