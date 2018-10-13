package com;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.ConstructionProjectMapper;
import com.decorate.mapper.ConstructionTypeMapper;
import com.decorate.model.ConstructionProject;
import com.decorate.model.ConstructionType;
import com.decorate.service.ConstructionProjectService;
import com.decorate.service.ConstructionTypeService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@EntityScan("com.decorate.model")
@MapperScan("com.decorate.mapper")
public class DecorateApplicationTests {
	@Resource
	private ConstructionProjectMapper constructionProjectMapper;
	@Resource
	private ConstructionTypeMapper constructionTypeMapper;
	@Resource
	private ConstructionProjectService constructionProjectService;
	@Resource
	private ConstructionTypeService constructionTypeService;
	@Test
	public void contextLoads() {

		ConstructionType entity = new ConstructionType();
		entity.setName("水电改造1");
		//constructionTypeMapper.insert(entity);
		try {
			constructionTypeService.saveOrUpdate(entity);
		} catch (ServiceException e) {
			e.printStackTrace();
		}

		List<ConstructionType> list = constructionTypeMapper.selectAll();
		Gson gson = new GsonBuilder().create();
		System.out.println(gson.toJson(list));
	}

	@Test
	public void test(){
		List<ConstructionType> list = constructionTypeMapper.selectAllRelateType();
		Gson gson = new GsonBuilder().create();
		System.out.println(gson.toJson(list.get(0).getConstructionProjectList()));

		System.out.println("1");
	}

}
