package com;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.ItemMapper;
import com.decorate.mapper.ItemTypeMapper;
import com.decorate.model.Item;
import com.decorate.model.ItemType;
import com.decorate.model.SysResource;
import com.decorate.service.ItemService;
import com.decorate.service.ItemTypeService;
import com.decorate.service.SysResourceService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.util.json.GsonUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
@EntityScan("com.decorate.model")
@MapperScan("com.decorate.mapper")
public class DecorateApplicationTests {
	@Resource
	private ItemMapper constructionProjectMapper;
	@Resource
	private ItemTypeMapper itemTypeMapper;
	@Resource
	private ItemService itemService;
	@Resource
	private ItemTypeService itemTypeService;
	@Resource
	private SysResourceService sysResourceService;

	private Gson gson = new GsonBuilder().serializeNulls().create();
	@Test
	public void contextLoads() {

		ItemType entity = new ItemType();
		entity.setName("水电改造1");
		//constructionTypeMapper.insert(entity);
		try {
			itemTypeService.saveOrUpdate(entity);
		} catch (ServiceException e) {
			e.printStackTrace();
		}

		List<ItemType> list = itemTypeMapper.selectAll();
		Gson gson = new GsonBuilder().create();
		System.out.println(gson.toJson(list));
	}

	@Test
	public void test(){
		List<ItemType> list = itemTypeMapper.selectAllRelateType();
		Gson gson = new GsonBuilder().create();
		System.out.println(gson.toJson(list.get(0).getItemList()));

		System.out.println("1");
	}
	@Test
	public void getRoot(){
		SysResource root = sysResourceService.getRootNode();
		System.out.println(gson.toJson(root));
	}

	@Test
	public void test2(){
		Page<ItemType> page = PageHelper.startPage(1, 5);
		List<ItemType> result = itemTypeMapper.selectAll();
		PageInfo pageInfo = new PageInfo<>(page);
		System.out.println(GsonUtil.toJsonStr(pageInfo));
	}

	@Test
	public void testOptional(){
		Item entity = null;
		try {
			Optional.ofNullable(entity)
					.orElseThrow(()->new ServiceException(""));
		} catch (ServiceException e) {
			e.printStackTrace();
		}
	}

}
