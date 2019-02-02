package com.util.json.gsonadapter;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;

import java.lang.reflect.Type;

public class LongDefaultAdaper implements JsonDeserializer<Long> {

    @Override
    public Long deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context)
            throws JsonParseException {
        try {
            if (json.getAsString().equals("") || json.getAsString().equals("null")) {
                return null;
            }
            if (json.getAsLong() > 0) {
                return Long.parseLong(json.getAsString());
            }
        } catch (Exception ignore) {
        }
        return Long.parseLong(json.getAsString());
    }

}
