function count_paths(grid_size){
	var grid = new Array(grid_size);
	for(k = 0; k <= grid_size; k++){
		grid[k] = 1;
	}
	for(i = 1; i <= grid_size; i++){
		for(j = 1; j <= i; j++){
			grid[j] = grid[j] + grid[j-1];
		}
		grid[i] = 2 * grid[i-1];
	}
	return grid[grid_size];
}
