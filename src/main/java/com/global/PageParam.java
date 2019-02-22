package com.global;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 描述:
 *
 * @author turningOwei
 * @param
 * @return
 * @date 2019/2/1 21:44
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageParam<T> {
    public Boolean isPage;
    public Integer page;
    public Integer start;
    public Integer limit;
    public List<T> list;
}
