package com.util.json.gsonadapter;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;

import java.lang.reflect.Type;

public class IntegerDefaultAdaper implements JsonDeserializer<Integer> {

    @Override
    public Integer deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context)
            throws JsonParseException {
        try {
            if (json.getAsString().equals("") || json.getAsString().equals("null")) {
                return null;
            }
            if (json.getAsLong() > 0) {
                return Integer.parseInt(json.getAsString());
            }
        } catch (Exception ignore) {
        }
        return Integer.parseInt(json.getAsString());
    }

}
