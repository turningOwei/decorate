package com.decorate.model.framework;

import lombok.Data;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-01 21:41
 */
@Data
public class PageImpl {
    private boolean isPage;
    private int page;
    private int start;
    private int limit;
}
