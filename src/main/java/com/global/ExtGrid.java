package com.global;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 *
 * @author turningOwei
 * @date 2016/12/22
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExtGrid implements Serializable{
    private Object data;
    private Long totalCount;
    private boolean success;

    public ExtGrid(Object data){
        this.data = data;
    }
}
