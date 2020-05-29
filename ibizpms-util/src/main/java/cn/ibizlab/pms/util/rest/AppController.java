package cn.ibizlab.pms.util.rest;

import com.alibaba.fastjson.JSONObject;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import cn.ibizlab.pms.util.service.AuthenticationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

@RestController
@RequestMapping(value = "")
public class AppController {

	@Value("${ibiz.enablePermissionValid:false}")
    boolean enablePermissionValid;  //是否开启权限校验

    @Value("${"ibiz.systemid:pms'}")
	private String systemId;


	@Autowired
	private AuthenticationUserService userDetailsService;

	@RequestMapping(method = RequestMethod.GET, value = "/appdata")
	public ResponseEntity<JSONObject> getAppData() {

		JSONObject appData = new JSONObject() ;
		Set<String> appMenu = new HashSet();
		Set<String> uniRes = new HashSet();

		if(enablePermissionValid){
			Collection<GrantedAuthority> authorities=AuthenticationUser.getAuthenticationUser().getAuthorities();
				Iterator it = authorities.iterator();
				while(it.hasNext()) {
					GrantedAuthority authority = (GrantedAuthority)it.next();
					String strAuthority=authority.getAuthority();
					if(strAuthority.startsWith("UNIRES_"+systemId))
						uniRes.add(strAuthority.substring(systemId.length()+8));
					else if(strAuthority.startsWith("APPMENU_"+systemId))
						appMenu.add(strAuthority.substring(systemId.length()+9));
				}
		}
		appData.put("unires",uniRes);
    	appData.put("appmenu",appMenu);
		appData.put("enablepermissionvalid",enablePermissionValid);
		return ResponseEntity.status(HttpStatus.OK).body(appData);
	}

    @RequestMapping(method = RequestMethod.GET, value = "${ibiz.auth.logoutpath:v7/logout}")
    public void logout() {
		if(AuthenticationUser.getAuthenticationUser()!=null){
			userDetailsService.resetByUsername(AuthenticationUser.getAuthenticationUser().getUsername());
    	}
    }
}
