package com.util.json;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.util.json.gsonadapter.DateDefaultAdaper;
import com.util.json.gsonadapter.DoubleDefaultAdaper;
import com.util.json.gsonadapter.IntegerDefaultAdaper;
import com.util.json.gsonadapter.LongDefaultAdaper;

import java.util.Date;

public class GsonUtil {
    private static Gson gson = new GsonBuilder()
            .registerTypeAdapter(Date.class, new DateDefaultAdaper())
            .registerTypeAdapter(Double.class, new DoubleDefaultAdaper())
            .registerTypeAdapter(Long.class,new LongDefaultAdaper())
            .registerTypeAdapter(Integer.class,new IntegerDefaultAdaper())
            .create();

    public static Gson create() {
        return gson;
    }

    public static String toJsonStr(Object bean) {
        return gson.toJson(bean);
    }
}
